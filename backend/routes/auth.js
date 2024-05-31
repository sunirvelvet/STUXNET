const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { Sequelize } = require('sequelize');

const router = express.Router();


// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);


    try {
        const existingUserByUsername = await User.findOne({ where: { username }});
        if (existingUserByUsername) {
            return res.status(400).json({error:'Username taken'});
        }

        const existingUserByEmail = await User.findOne({ where: { email }});
        if (existingUserByEmail) {
            return res.status(400).json({ error: 'Account with this email already exists' });
        }


        const user = await User.create({ username, email, password: hashedPassword });
        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
        res.status(201).json({ token, user: { username: user.username, email: user.email } });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { emailOrUsername, password } = req.body;

    try {
        const trimmedInput = emailOrUsername.trim();

        const user = await User.findOne({
            where: {
                [Sequelize.Op.or]: [
                    { email: trimmedInput },
                    { username: trimmedInput }
                ]
            }
        });

        if (!user) {
            return res.status(404).json({error: 'No account with this username or email'});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
        res.status(200).json({token, user: { username: user.username, email: user.email }});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

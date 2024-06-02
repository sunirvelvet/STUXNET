 const express = require('express');
 const { Game } = require('../../models');

 const router = express.Router();

 router.post('/', async (req, res) => {
    const { title, imageUrl, price } = req.body;

    try {
        const game = await Game.create({ title, imageUrl, price });
        res.status(201).json(game);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
 });


 router.get('/', async (req, res) => {
    try {
        const games = await Game.findAll();
        res.status(200).json(games);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
 });

 module.exports = router;

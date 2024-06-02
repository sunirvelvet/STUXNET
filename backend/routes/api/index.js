const express = require('express');
const authRoutes = require('./auth');
const gameRoutes = require('./games');

const router = express.Router();


router.use('/auth', authRoutes);
router.use('/games', gameRoutes);


module.exports = router;

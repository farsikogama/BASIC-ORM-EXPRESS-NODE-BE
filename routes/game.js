const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization');

const gameController = require('../controllers/gameController');

// Get Game Details
router.get('/:game_id', gameController.getOne);

// Update a game's play count
router.put('/playcount/:game_id', authorization, gameController.addPlayCount);

module.exports = router;

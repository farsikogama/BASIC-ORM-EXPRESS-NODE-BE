const express = require('express');
const gameListsController = require('../controllers/gameListsController');
const router = express.Router();

router.get('/gamelist', gameListsController.gamelist)

module.exports = router;
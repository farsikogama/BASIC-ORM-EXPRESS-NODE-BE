const { validationResult } = require('express-validator');
const { Game, User } = require('../models');

module.exports = {
  getOne: async (req, res) => {
    const gameId = req.params.game_id;
    try {
      const game = await await Game.findOne({
        where: { id: gameId },
        include: [
          {
            model: User,
            as: 'users',
            attributes: ['id', 'username'],
          },
        ],
      });

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Data game tidak ditemukan',
          result: null,
        });
      }

      res.json({
        success: true,
        message: 'Berhasil mendapatkan detail game',
        result: game,
      });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({
        success: false,
        errors: [
          {
            msg: error.message || error,
          },
        ],
      });
    }
  },
  addPlayCount: async (req, res) => {
    const gameId = req.params.game_id;

    try {
      const game = await Game.findOne({ where: { id: gameId } });

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Data game tidak ditemukan',
          result: null,
        });
      }

      // update game's play_count data
      await game.update({ play_count: game.play_count + 1 });

      res.json({
        success: true,
        message: 'Berhasil memperbarui data game',
      });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({
        success: false,
        errors: [
          {
            msg: error.message || error,
          },
        ],
      });
    }
  },
};

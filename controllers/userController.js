const { User, UserGame } = require('../models');

module.exports = {
  getOne: async (req, res) => {
    const userId = req.params.user_id;
    try {
      const user = await User.findOne({ where: { id: userId }, attributes: { exclude: ['password'] } });

      if (!user) {
        res.status(404).json({
          success: false,
          message: 'Data user tidak ditemukan',
          result: null,
        });
      }

      res.json({
        success: true,
        message: 'Berhasil mendapatkan data user',
        result: user,
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
  UpdateOne: async (req, res) => {
    const userId = req.params.user_id;
    const userIdHeader = req.user.id;

    const { name, username, email, address } = req.body;
    try {
      if (userId != userIdHeader) {
        res.status(404).json({
          success: false,
          message: 'you are not allowed to edit this data',
          result: null,
        });
      }
      const user = await User.update(
        {
          name: name,
          username: username,
          email: email,
          address: address,
        },
        { where: { id: userId } }
      );

      res.json({
        success: true,
        message: 'Berhasil mengupdate data user',
        result: user,
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

  addScore: async (req, res) => {
    const gameId = req.params.game_id;

    try {
      const user = await User.findOne({ where: { id: req.user.id }, attributes: { exclude: ['password'] } });

      // update score in User table
      await user.update({ score: user.score + 1 });

      // add score in UserGame table
      const userGame = await UserGame.findOne({ where: { userId: req.user.id, gameId: gameId } });

      if (userGame) {
        // jika user sudah pernah memainkan game sebelumnya, tinggal diupdate scorenya
        userGame.update({ score: userGame.score + 1 });
      } else {
        // jika user belum pernah memainkan game, buat data baru di table UserGame dengan score 1
        await UserGame.create({ userId: req.user.id, gameId, score: 1 });
      }

      res.json({
        success: true,
        message: 'Berhasil memperbarui skor user',
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

const { validationResult } = require('express-validator');
const { User } = require('../models');

const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

module.exports = {
  register: async (req, res) => {
    // Error checking
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: error.array(),
      });
    }

    const { name, username, email, password } = req.body;

    try {
      const user = await User.register({ name, username, email, password });
      console.log(user);

      const token = user.generateToken();

      res.json({
        success: true,
        message: 'Berhasil mendaftarkan user',
        token,
      });
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({
        success: false,
        errors: [
          {
            msg: 'Internal Server Error!',
            error: error.message || error,
          },
        ],
      });
    }
  },

  login: async (req, res) => {
    // Error checking
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: error.array(),
      });
    }

    try {
      const user = await User.authenticate(req.body);
      console.log(user);

      const token = user.generateToken();

      res.json({
        success: true,
        message: 'Berhasil login',
        token,
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

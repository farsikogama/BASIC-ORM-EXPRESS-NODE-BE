var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({
    status: true,
    message: 'Hello World !!',
  });
});

/* GET all users (only temporary for testing) */
router.get('/test', async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    res.json({
      success: true,
      message: 'Success get all users (only temporary for testing)',
      results: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error!',
      errors: [
        {
          msg: error.message || error,
        },
      ],
    });
  }
});

module.exports = router;

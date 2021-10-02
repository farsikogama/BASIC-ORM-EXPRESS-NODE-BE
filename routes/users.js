const express = require('express');
const router = express.Router();
const authorization = require('../middleware/authorization');
const { check } = require('express-validator');

const jwtAuthController = require('../controllers/jwtAuthController');
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Tim 2: #PushAjaDulu');
});

// Register route
router.post(
  '/register',
  [
    check('name')
      .not()
      .isEmpty()
      .withMessage('Nama lengkap wajib diisi')
      .matches(/^[A-Za-z\s]+$/)
      .withMessage('Angka/simbol tidak dibolehkan, mohon periksa kembali')
      .isLength({ max: 50 })
      .withMessage('Panjang nama yang dibolehkan maksimal 50 karakter'),
    check('username').not().isEmpty().withMessage('Username wajib diisi').isLength({ max: 10 }).withMessage('Panjang username yang dibolehkan maksimal 10 karakter'),
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email cannot be empty!')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      .withMessage('Invalid email!'),
    check('password').not().isEmpty().withMessage('Password wajib diisi').isLength({ min: 3 }).withMessage('Password kurang dari 3 karakter, mohon periksa kembali'),
  ],
  jwtAuthController.register
);

// Login route
router.post(
  '/login',
  [check('email').not().isEmpty().withMessage('Email cannot be empty!'), check('password').not().isEmpty().withMessage('Password is not valid!')],
  jwtAuthController.login
);

// Get a user
router.get('/:user_id', authorization, userController.getOne);

// Edit data a user
router.put('/:user_id', authorization, userController.UpdateOne);

// Update user's score
router.put('/score/game/:game_id', authorization, userController.addScore);

module.exports = router;

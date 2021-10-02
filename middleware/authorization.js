const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header('token');
    // console.log(`ini jwtToken ${jwtToken}`);

    if (!jwtToken) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      });
    }

    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    // console.log(`ini payload ${payload}`);

    req.user = payload;
    // console.log(`ini req.user ${req.user}`);
    // res.json("you are authorized");

    next();
  } catch (err) {
    console.error(err.message);
  }
};

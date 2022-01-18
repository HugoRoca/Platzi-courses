const express = require('express');
const passport = require('passport');

const AuthService = require('../services/auth.service');

const authService = new AuthService();
const router = express.Router();

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(authService.singToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const response = await authService.sendMail(email);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

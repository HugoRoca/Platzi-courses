const { Strategy } = require('passport-local');

const AuthService = require('../../../services/auth.service');
const authService = new AuthService();

const localStrategy = new Strategy(
  {
    // TODO: Customize fields
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await authService.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = localStrategy;

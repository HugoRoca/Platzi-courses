const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const UserService = require('./user.service.js');
const { config } = require('../config/config');

const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw boom.unauthorized();

    delete user.dataValues.password;
    return user;
  }

  singToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };

    const token = jwt.sign(payload, config.jwtSecret);

    return { user, token };
  }

  async sendRecoveryPassword(email) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `http://my-frontend.com/reset-password?token=${token}`;

    await service.update(user.id, { recoveryToken: token });

    const mail = {
      from: config.smtpUser,
      to: user.email,
      subject: 'Email for recovery your password',
      html: `<b>Click <a href="${link}">here</a> for recovery your password</b>`,
    };

    const rta = await this.sendMail(mail);
    return rta;
  }

  async sendMail(body) {
    const transporter = nodemailer.createTransport({
      host: config.smtp,
      secure: config.smtpSecure, // if is true, change port to 465
      port: config.smtpPort,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword,
      },
    });

    await transporter.sendMail(body);

    return { message: 'Mail sent' };
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);

      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }

      const hash = await bcrypt.hash(newPassword, 10);

      await service.update(user.id, { recoveryToken: null, password: hash });

      return { message: 'Change password' };
    } catch (error) {
      boom.badRequest();
    }
  }
}

module.exports = AuthService;

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

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) throw boom.unauthorized();

    const transporter = nodemailer.createTransport({
      host: config.smtp,
      secure: config.smtpSecure, // if is true, change port to 465
      port: config.smtpPort,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword,
      },
    });

    await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: 'devan.koch48@ethereal.email', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    return { message: 'Mail sent' };
  }
}

module.exports = AuthService;

const joi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const saltRound = 10
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      const schema = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required(),
      })

      const { email, password } = await schema.validateAsync(req.allParams())
      const hashPassword = await bcrypt.hash(password, saltRound)
      const user = await User.create({ email, password: hashPassword }).fetch()

      return res.ok(user)
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({ err }).json()
      }

      return res.serverError({ err }).json()
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    try {
      const schema = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required(),
      })

      const { email, password } = await schema.validateAsync(req.allParams())
      const user = await User.findOne({ email: email })

      if (!user) return res.notFound({ err: 'User not found' })

      const comparePassword = await bcrypt.compare(password, user.password)
      const token = AuthenticationService.JWTIssuer({ user: user.id }, '1 day')

      return comparePassword
        ? res.ok({ token })
        : res.badRequest({ err: 'Unauthorized' })
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({ err }).json()
      }

      return res.serverError({ err }).json()
    }
  },
}

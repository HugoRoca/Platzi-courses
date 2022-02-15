const joi = require('@hapi/joi')
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

      const params = await schema.validateAsync(req.allParams())

      return res.ok(params)
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
    return res.json({
      todo: 'login() is not implemented yet!',
    })
  },
}

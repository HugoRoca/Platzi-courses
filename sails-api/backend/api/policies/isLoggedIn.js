module.exports = async (req, res, next) => {
  if (!req.headers || !req.headers.authorization)
    return res.badRequest({ err: 'Authorization header required' })

  const token = req.headers.authorization
  const decodedToken = AuthenticationService.JWTVerify(token)
  const user = await User.findOne({ id: decodedToken.user })

  if (!user) return next({ err: 'Unauthorized' })

  req.user = user.id

  next()
}

const jwt = require('jsonwebtoken')

function sing(payload, secret, cb) {
  jwt.sign(payload, secret, cb)
}

function verify(token, secret, cb) {
  jwt.verify(token, secret, cb)
}

sing(
  { username: 'admin', admin: true, permissions: ['metrics:read'] },
  'secret',
  console.log
)
verify(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1Z28iLCJpYXQiOjE2NDM5MDYzNDh9.ANZKuv6GHFqJvF1RIxajlcUEwSMaBVge86ATiPat25w',
  'secret',
  console.log
)

module.exports = {
  sing,
  verify,
}

const jwt = require("jsonwebtoken");

const config = require("../config");
const error = require("../utils/error");

const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  return jwt.verify(token, secret);
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);

    if (decoded.id !== owner) throw error("Not authorized");
  },
};

function getToken(auth) {
  if (!auth) throw new Error("Token not found");

  const token = auth.replace("Bearer ", "");

  if (auth.indexOf("Bearer ") === -1) throw error("Token is invalid");
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
}

module.exports = {
  sign,
  check,
};

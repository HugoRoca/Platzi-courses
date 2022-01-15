const jwt = require('jsonwebtoken');

const secret = 'myDog'; // TODO: in .env
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MjI2ODg0NH0.pe215JNy21fKaef1tDP43Iw1XQ__6c4cyZ47cP-TWwU';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);

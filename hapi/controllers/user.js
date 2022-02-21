function createUser(req, h) {
  console.log(req.payload);
  return "user created";
}

module.exports = {
  createUser,
};

const { users } = require("../models/index");

async function createUser(req, h) {
  let result;
  try {
    result = await users.create(req.payload);
  } catch (error) {
    console.error(error);
    return h.response(`An error occurred while creating user`).code(500);
  }

  return h.response(`User created successfully ID:${result}`);
}

module.exports = {
  createUser,
};

const Boom = require("@hapi/boom");

const { users } = require("../models/index");

async function createUser(req, h) {
  let result;
  try {
    result = await users.create(req.payload);
  } catch (error) {
    console.error(error);
    return h.view(`register`, {
      title: "Register",
      error: "Error creating user",
    });
  }

  return h.view(`register`, {
    title: "Register",
    success: "User created successfully",
  });
}

async function validateUser(req, h) {
  let result;
  try {
    result = await users.validateUser(req.payload);

    if (!result) {
      return h.view("login", {
        title: "Login",
        error: "Email or password is incorrect",
      });
    }
  } catch (error) {
    console.error(error);
    return h.view("login", {
      title: "Login",
      error: "An error occurred while logging",
    });
  }

  return h.redirect(`/`).state("user", {
    name: result.name,
    email: result.email,
  });
}

function logout(req, h) {
  return h.redirect("/login").unstate("user");
}

function failValidation(req, h, err) {
  return Boom.badRequest(`Failed validation`, req.payload);
}

module.exports = {
  createUser,
  validateUser,
  logout,
  failValidation,
};

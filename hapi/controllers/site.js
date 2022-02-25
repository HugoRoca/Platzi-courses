const question = require("../models/index").Questions;

async function home(req, h) {
  let data;
  try {
    data = await question.getLast(10);
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return h.view("index", {
    title: "Home",
    user: req.state.user,
    questions: data,
  });
}

function register(req, h) {
  if (!req.state.user) {
    return h.redirect(`/`);
  }

  return h.view("register", {
    title: "Register",
    user: req.state.user,
  });
}

function login(req, h) {
  if (!req.state.user) {
    return h.redirect(`/`);
  }

  return h.view("login", {
    title: "SignIn",
    user: req.state.user,
  });
}

function notFound(req, h) {
  return h.view("404", {}, { layout: "error-layout" }).code(404);
}

function fileNotFound(req, h) {
  const response = req.response;

  if (response.isBoom && response.output.statusCode === 404) {
    return h.view("404", {}, { layout: "error-layout" }).code(404);
  }

  return h.continue;
}

function ask(req, h) {
  if (!req.state.user) {
    return h.redirect(`/login`);
  }

  return h.view("ask", {
    title: "Create Ask",
    user: req.state.user,
  });
}

async function viewQuestion(req, h) {
  let data;
  try {
    data = await question.getOne(req.params.id);
    console.log(data);
    if (!data) return notFound(req, h);
  } catch (error) {
    console.error("viewQuestion", error);
  }

  return h.view("question", {
    title: "Question details",
    user: req.state.user,
    question: data,
    key: req.params.id,
  });
}

module.exports = {
  home,
  register,
  login,
  notFound,
  fileNotFound,
  ask,
  viewQuestion,
};

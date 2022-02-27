const question = require("../models/index").Questions;

async function createQuestion(req, h) {
  let result;
  try {
    result = await question.create(req.payload, req.state.user);
  } catch (error) {
    console.error(`An error occurred`, error);
    return h
      .view("ask", {
        title: "Create ask",
        error: "Error while created question",
      })
      .code(500)
      .takeover();
  }

  return h.response("`Create successfully", result);
}

async function answerQuestion(req, h) {
  let result;
  try {
    result = await question.answer(req.payload, req.state.user);
  } catch (error) {
    console.error(error);
  }

  const data = { ...req.payload };

  return h.redirect(`/question/${data.id}`);
}

module.exports = {
  createQuestion,
  answerQuestion,
};

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

module.exports = {
  createQuestion,
};

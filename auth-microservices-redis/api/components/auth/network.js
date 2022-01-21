const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const data = await Controller.login(req.body.userName, req.body.password);
    response.success(req, res, data, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

module.exports = router;

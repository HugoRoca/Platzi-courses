const express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controller = require("./controller");

router.get("/", (req, res) => {
  controller
    .getMessages()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 400);
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "error", 400);
    });
});

module.exports = router;

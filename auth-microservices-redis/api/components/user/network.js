const express = require("express");
const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", async (req, res) => {
  const list = await Controller.list();
  try {
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.post("/", async (req, res) => {
  try {
    await Controller.updateInsert(req.body);
    response.success(req, res, "correct insert", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

module.exports = router;

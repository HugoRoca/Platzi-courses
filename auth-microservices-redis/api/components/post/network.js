const express = require("express");

const response = require("../../../network/response");
const secure = require("../user/secure");
const Controller = require("./index");

const router = express.Router();

router.get("/", list);
router.post("/", secure("post"), insert);
router.put("/:id", secure("post"), update);
router.get("/:id", getById);

async function getById(req, res, next) {
  try {
    const result = await Controller.getById(req.params.id);
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function update(req, res, next) {
  try {
    await Controller.update(req.body, req.params.id);
    response.success(req, res, "update successfully", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function insert(req, res, next) {
  try {
    await Controller.insert(req.body, req.user.id);
    response.success(req, res, "Register successfully", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function list(req, res, next) {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

module.exports = router;

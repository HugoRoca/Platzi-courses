const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.get("/", list);
router.post("/", insert);
router.get("/:id", getById);

async function getById(req, res, next) {
  try {
  } catch (error) {}
}

async function insert(req, res, next) {
  try {
  } catch (error) {}
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

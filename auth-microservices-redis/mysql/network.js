const express = require("express");

const response = require("../network/response");
const Store = require("../store/mysql");

const router = express.Router();

router.get("/:table", list);
router.get("/:table/:id", getById);
router.post("/:table", insert);
router.put("/:table", update);

async function list(req, res, next) {
  try {
    const result = await Store.list(req.params.table);
    res.json(result);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function getById(req, res, next) {
  try {
    const result = await Store.get(req.params.table, req.params.id);
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function insert(req, res, next) {
  try {
    await Store.updateInsert(req.params.table, req.body, true);
    response.success(req, res, "insert successfully", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function update(req, res, next) {
  try {
    await Store.updateInsert(req.params.table, req.body, false);
    response.success(req, res, "update successfully", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

module.exports = router;

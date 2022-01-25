const express = require("express");

const response = require("../network/response");
const Store = require("../store/redis");

const router = express.Router();

router.get("/:table", list);
router.get("/:table/:id", get);
router.put("/:table", updateInsert);

async function list(req, res, next) {
  const data = await Store.list(req.params.table);
  response.success(req, res, data, 200);
}

async function get(req, res, next) {
  const data = await Store.get(req.params.table, req.params.id);
  response.success(req, res, data, 200);
}

async function updateInsert(req, res, next) {
  const data = await Store.updateInsert(req.params.table, req.body);
  response.success(req, res, data, 200);
}

module.exports = router;

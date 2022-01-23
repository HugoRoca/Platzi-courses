const express = require("express");

const secure = require("./secure");
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

router.post("/", updateInsert);
router.put("/", secure("update"), updateInsert);
router.post("/follow/:id", secure("follow"), follow);
router.get("/:id/following", following);

async function updateInsert(req, res) {
  try {
    await Controller.updateInsert(req.body);
    response.success(req, res, "correct insert", 200);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
}

async function follow(req, res, next) {
  try {
    const result = await Controller.follow(req.user.id, req.params.id);
    response.success(req, res, result, 200);
  } catch (error) {
    console.log(error);
    response.error(req, res, error.message, 500);
  }
}

async function following(req, res, next) {
  try {
    const result = await Controller.following(req.params.id);
    response.success(req, res, result, 200);
  } catch (error) {
    console.log(error);
    response.error(req, res, error.message, 500);
  }
}

module.exports = router;

const express = require('express');
const router = express.Router();
const response = require('../../network/response')

router.get('/', (req, res) => {
  console.log(req.headers)
  res.success(req, res, 'list messages')
})

router.post('/', (req, res) => {
  response.success(req, res, 'saved!')
})

module.exports = router;

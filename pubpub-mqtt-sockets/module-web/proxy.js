const express = require('express')
const asyncIfy = require('express-asyncify')
const axios = require('axios')

const { apiToken, endpoint } = require('./config')
const api = asyncIfy(express.Router())

api.get('/agents', async (req, res, next) => {
  const options = {
    method: 'GET',
    url: `${endpoint}/api/agents`,
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
    json: true,
  }

  let result
  try {
    result = await axios(options)
  } catch (error) {
    next(error)
  }

  res.send(result)
})

api.get('/agent/:uuid', (req, res, next) => {})

api.get('/metrics/:uuid', (req, res, next) => {})

api.get('/metrics/:uuid/:type', (req, res, next) => {})

module.exports = api

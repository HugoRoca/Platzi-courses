const debug = require('debug')('module:api:routes')
const express = require('express')
const db = require('module-db')
const asyncIfy = require('express-asyncify')

const config = require('./config')

const api = asyncIfy(express.Router())

let services, Agent, Metric

api.use('*', async (req, res, next) => {
  if (!services) {
    try {
      services = await db(config.db)
    } catch (error) {
      return next(error)
    }

    Agent = services.Agent
    Metric = services.Metric
  }

  next()
})

api.get('/agents', async (req, res) => {
  let agents = []
  try {
    agents = await Agent.findConnected()
  } catch (error) {
    return next(error)
  }

  res.send(agents)
})

api.get('/agents/:uuid', async (req, res, next) => {
  const { uuid } = req.params

  let agent
  try {
    agent = await Agent.findByUuid(uuid)
  } catch (error) {
    return next(error)
  }

  if (!agent) return next(new Error(`Agent not found with uuid ${uuid}`))

  res.send(agent)
})

api.get('/metrics/:uuid', async (req, res, next) => {
  const { uuid } = req.params

  let metrics = []
  try {
    metrics = await Metric.findByAgentUuid(uuid)
  } catch (error) {
    return next(error)
  }

  if (!metrics || metrics.length === 0)
    return next(new Error(`Metrics not found for agent ${uuid}`))

  res.send(metrics)
})

api.get('/metrics/:uuid/:type', async (req, res, next) => {
  const { uuid, type } = req.params

  let metrics = []
  try {
    metrics = await Metric.findByTypeAgentUuid(type, uuid)
  } catch (error) {
    return next(error)
  }

  if (!metrics || metrics.length === 0)
    return next(new Error(`Metrics (${type}) not found for agent ${uuid}`))

  res.send(metrics)
})

module.exports = api

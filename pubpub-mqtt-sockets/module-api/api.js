const debug = require('debug')('module:api:routes')
const express = require('express')
const db = require('module-db')
const asyncIfy = require('express-asyncify')
const auth = require('express-jwt')
const guard = require('express-jwt-permissions')()

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

api.get('/agents', auth(config.auth), async (req, res) => {
  const { user } = req

  if (!user || !user.username) return next(new Error('Not authorized'))

  let agents = []
  try {
    if (user.admin) agents = await Agent.findConnected()
    else {
      agents = await Agent.findByUsername(user.username)
    }
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
// TODO: auth.sign({'username': 'user', 'permissions': [ 'metrics:read' ]}, 'user', console.log)
api.get(
  '/metrics/:uuid',
  auth(config.auth),
  guard.check(['metrics:read']),
  async (req, res, next) => {
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
  }
)

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

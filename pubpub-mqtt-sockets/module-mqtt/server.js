const debug = require('debug')('module:mqtt')
const redis = require('redis')
const db = require('module-db')
const mqEmitter = require('mqemitter-redis')
const redisPersistence = require('aedes-persistence-redis')
let aedes = require('aedes')

const { parsePayload } = require('./utils')

let Agent, Metric

// https://shrey-misra.medium.com/customizing-your-own-mqtt-broker-with-node-js-4bc8212a1739

function startAedes() {
  const port = 1883
  const clients = new Map()

  aedes = aedes({
    mq: mqEmitter({
      port: '6379',
      host: '127.0.0.1',
      password: 'sOmE_sEcUrE_pAsS',
      family: 4,
    }),
    persistence: redisPersistence({
      port: '6379',
      host: '127.0.0.1',
      password: 'sOmE_sEcUrE_pAsS',
      family: 4, // 4 (IPv4) or 6 (IPv6)
    }),
  })

  aedes.on('client', function (client) {
    clients.set(client.id, null)
    debug(`[CLIENT_CONNECTED] client: ${client.id}`)
  })

  aedes.on('clientDisconnect', async (client) => {
    debug(`[CLIENT_DISCONNECTED] client ${client.id}`)
    const agent = clients.get(client.id)

    if (agent) {
      agent.connected = false

      try {
        await Agent.createOrUpdate(agent)
      } catch (error) {
        return handleError(error)
      }

      clients.delete(client.id)

      aedes.publish({
        topic: 'agent/disconnected',
        payload: JSON.stringify({
          agent: {
            uuid: agent.uuid,
          },
        }),
      })

      debug(
        `[CLIENT_DISCONNECTED] Client ${client.id} associated to agent ${agent.uuid} marked ad disconnected`
      )
    }
  })

  aedes.on('subscribe', function (subscriptions, client) {
    debug(`[TOPIC_SUBSCRIBED] client ${client.id}`)
  })

  aedes.on('unsubscribe', function (subscriptions, client) {
    debug(`[TOPIC_UNSUBSCRIBED] client ${client.id}`)
  })

  aedes.on('publish', async (packet, client) => {
    if (client) {
      debug(`[MESSAGE_PUBLISHED] ${packet.payload}`)
      switch (packet.topic) {
        case 'agent/connected':
        case 'agent/disconnected':
          break
        case 'agent/message':
          let payload = parsePayload(packet.payload)
          let agent

          if (!payload) return false

          payload.agent.connected = true

          try {
            agent = await Agent.createOrUpdate(payload.agent)
          } catch (error) {
            return handleError(e)
          }

          debug(`Agent ${agent.uuid} saved`)

          if (!clients.get(client.id)) {
            clients.set(client.id, agent)
            aedes.publish({
              topic: 'agent/connected',
              payload: JSON.stringify({
                agent: {
                  uuid: agent.uuid,
                  name: agent.name,
                  hostname: agent.hostname,
                  pid: agent.pid,
                  connected: agent.connected,
                },
              }),
            })
          }

          for (const metric of payload.metrics) {
            let m

            try {
              m = await Metric.create(agent.uuid, metric)
            } catch (error) {
              return handleError(error)
            }

            debug(`Metric ${m.id} saved on agent ${agent.uuid}`)
          }

          break
      }
    }
  })

  const server = require('net').createServer(aedes.handle)

  const config = {
    database: process.env.DB_NAME || 'pubsub-mqtt-socket',
    username: process.env.DB_USER || 'hugo',
    password: process.env.DB_PASS || 'admin123',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    dialect: 'postgres',
    logging: (s) => debug(s),
  }

  server.listen(port, async () => {
    const services = await db(config).catch(handleFatalError)
    Agent = services.Agent
    Metric = services.Metric

    debug(`server is running`)
  })
}

function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

function handleError(err) {
  console.error(err.message)
  console.error(err.stack)
}

startAedes()

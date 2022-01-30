const db = require('../')

async function run() {
  const config = {
    database: process.env.DB_NAME || 'pubsub-mqtt-socket',
    username: process.env.DB_USER || 'hugo',
    password: process.env.DB_PASS || 'admin123',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    dialect: 'postgres',
  }

  const { Agent, Metric } = await db(config).catch(handleFatalError)

  const agent = await Agent.createOrUpdate({
    uuid: 'xxx',
    name: 'test',
    username: 'test',
    hostname: 'localhost',
    pid: 1,
    connected: true,
  }).catch(handleFatalError)

  console.log('--agent---')
  console.log(agent)

  const agents = await Agent.findAll().catch(handleFatalError)
  console.log('--agents---')
  console.log(agents)

  const metric = await Metric.create(agent.uuid, {
    type: 'memory',
    value: '300',
  }).catch(handleFatalError)
  console.log('--metric---')
  console.log(metric)

  const metrics = await Metric.findByAgentUuid(agent.uuid).catch(
    handleFatalError
  )
  console.log('--metrics---')
  console.log(metrics)

  const findByTypeAgentUuid = await Metric.findByTypeAgentUuid(
    'memory',
    agent.uuid
  )
  console.log('--metricsUuid')
  console.log(findByTypeAgentUuid)
}

function handleFatalError(err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()

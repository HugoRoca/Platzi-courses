const ModuleAgent = require('../index')

const agent = new ModuleAgent({
  name: 'myApp',
  username: 'admin',
  interval: 2000,
})

agent.addMetric('rss', function getRss() {
  return process.memoryUsage().rss
})

agent.addMetric('promiseMetric', function getRandomPromise() {
  return Promise.resolve(Math.random())
})

agent.addMetric('callbackMetric', function getRandomCallback(cb) {
  setTimeout(() => {
    cb(null, Math.random())
  }, 1000)
})

let handler = {}

agent.connect()

// this agent only
agent.on('connected', () => {})
agent.on('disconnected', () => {})
agent.on('message', () => {})

// Other Agents
agent.on('agent/connected', () => {})
agent.on('agent/disconnected', () => {})
agent.on('agent/message', (payload) => {
  console.log(payload)
})

setTimeout(() => agent.disconnect(), 10000)

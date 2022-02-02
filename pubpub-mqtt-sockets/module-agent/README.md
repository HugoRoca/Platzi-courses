# Module Agent

## Usage

```js
const ModuleAgent = require('module-agent')
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

agent.connect()

// this agent only
agent.on('connected', handler)
agent.on('disconnected', handler)
agent.on('message', handler)

// Other Agents
agent.on('agent/connected', handler)
agent.on('agent/disconnected', handler)
agent.on('agent/message', (payload) => {
  console.log(payload)
})

setTimeout(() => agent.disconnect(), 20000)
```

## For execute

```
node example/index.js
```

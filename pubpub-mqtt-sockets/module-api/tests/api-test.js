const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')

const agentFixtures = require('./fixtures/agent')
// const request = require('supertest')

// const server = require('../server')

let sandbox = null
let server = null
let dbStub = null
let AgentStub = {}
let MetricStub = {}

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  dbStub = sandbox.stub()
  dbStub.returns(
    Promise.resolve({
      Agent: AgentStub,
      Metric: MetricStub,
    })
  )

  AgentStub.findConnected = sandbox.stub()
  AgentStub.findConnected.returns(Promise.resolve(agentFixtures.connected))

  const api = proxyquire('../api', {
    'module-db': dbStub,
  })

  server = proxyquire('../server', {
    '../api': api,
  })
})

// test.serial.cb('/api/agents', (t) => {
//   request(server)
//     .get('/api/agents')
//     .expect(200)
//     .expect('Content-Type', /json/)
//     .end((err, res) => {
//       t.falsy(err, 'should not return an error')
//       let body = res.body
//       t.deepEqual(body, {}, 'response body should be the expected')
//       t.end()
//     })
// })

test.afterEach(() => {
  sandbox && sinon.createSandbox()
})

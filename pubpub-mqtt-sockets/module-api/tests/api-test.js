const test = require('ava')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const util = require('util')

const agentFixtures = require('./fixtures/agent')
const auth = require('../auth')
const config = require('../config')
const sign = util.promisify(auth.sign)
// const request = require('supertest')

// const server = require('../server')

let sandbox = null
let server = null
let dbStub = null
let token = null
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

  token = await sing({ admin: true, username: 'hugoRock' }, config.auth.secret)

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
//     .set('Authorization', `Bearer ${token}`)
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

const debug = require('debug')('module:mqtt')
const redis = require('redis')
let aedes = require('aedes')
// const chalk = require('chalk')

const mqemitter = require('mqemitter-redis')
const redisPersistence = require('aedes-persistence-redis')

function startAedes() {
  const port = 1883

  aedes = aedes({
    mq: mqemitter({
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

  const server = require('net').createServer(aedes.handle)

  server.listen(port, function () {
    console.log(`[module-mqtt] server is running`)
  })
}
startAedes()

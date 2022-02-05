const debug = require('debug')('module:web')
const http = require('http')
const express = require('express')
const chalk = require('chalk')
const path = require('path')
const socketio = require('socket.io')
const asyncIfy = require('express-asyncify')
const ModuleAgent = require('module-agent')

const { pipe } = require('./utils')
const proxy = require('./proxy')

const port = process.env.PORT || 8080
const app = asyncIfy(express())
const server = http.createServer(app)
const io = socketio(server)
const agent = new ModuleAgent()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', proxy)

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

// Socket.io / WebSockets
io.on('connect', (socket) => {
  debug(`Connected ${socket.id}`)

  pipe(agent, socket)

  // agent.on('agent/message', (payload) => {
  //   socket.emit('agent/message', payload)
  // })

  // agent.on('agent/connected', (payload) => {
  //   socket.emit('agent/connected', payload)
  // })

  // agent.on('agent/disconnected', (payload) => {
  //   socket.emit('agent/disconnected', payload)
  // })
})

function handleFatalError(err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.green('[module-web]')} server listening on port ${port}`)
  agent.connect()
})

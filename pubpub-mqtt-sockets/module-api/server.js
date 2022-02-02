const http = require('http')
const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('module:api')
const asyncIfy = require('express-asyncify')

const api = require('./api')

const app = asyncIfy(express())
const server = http.createServer(app)
const port = process.env.PORT || 3000

app.use('/api', api)

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError(err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

if (!module.main) {
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(port, () => {
    console.log(
      `${chalk.green('[module-api]')} server listening on port ${port}`
    )
  })
}

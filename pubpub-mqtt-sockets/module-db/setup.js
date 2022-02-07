const debug = require('debug')('module:db:setup')
// const chalk = require('chalk')
const inquirer = require('inquirer')
const minimist = require('minimist')

const db = require('./index')
const args = minimist(process.argv)

const prompts = inquirer.createPromptModule()

async function setup() {
  if (!args.yes) {
    const answer = await prompts([
      {
        type: 'confirm',
        name: 'setup',
        message: 'This will destroy your database, are you sure?',
      },
    ])

    if (!answer.setup) {
      return console.log('Nothing happened :)')
    }
  }

  const config = {
    database: process.env.DB_NAME || 'pubsub-mqtt-socket',
    username: process.env.DB_USER || 'hugo',
    password: process.env.DB_PASS || 'admin123',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    dialect: 'postgres',
    logging: (s) => debug(s),
    setup: true,
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
}

function handleFatalError(err) {
  // console.error(`${chalk.red(err.message)}`)
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()

const debug = require('debug')('module:api:db')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'pubsub-mqtt-socket',
    username: process.env.DB_USER || 'hugo',
    password: process.env.DB_PASS || 'admin123',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5432',
    dialect: 'postgres',
    logging: (s) => debug(s),
  },
}

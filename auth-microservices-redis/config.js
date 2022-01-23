module.exports = {
  api: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    pass: process.env.MYSQL_PASS || "admin123",
    database: process.env.MYSQL_DATABASE || "app_auth_microservice_redis",
  },
};

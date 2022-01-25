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
  mysql_service: {
    port: process.env.MYSQL_SERVICE_PORT || 3001,
    host: process.env.MYSQL_SERVICE_HOST || "localhost",
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  cache: {
    port: process.env.CACHE_PORT || 3003,
    port_cache: process.env.CACHE_PORT || "10776",
    host: process.env.CACHE_HOST || "redislabs.com",
    password: process.env.CACHE_PASSWORD || "",
  },
};

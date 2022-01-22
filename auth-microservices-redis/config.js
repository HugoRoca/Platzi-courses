module.exports = {
  api: {
    port: process.env.PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "sql10.freemysqlhosting.net",
    user: process.env.MYSQL_USER || "sql10467239",
    pass: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DATABASE || "sql10467239",
  },
};

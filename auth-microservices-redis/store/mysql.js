const mysql = require("mysql");

const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.pass,
  database: config.mysql.database,
};

let connection;

function handleConnection() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error(`[db error]`, err);
      setTimeout(() => {
        handleConnection;
      }, 2000);
    } else {
      console.log(`DB connected`);
    }
  });

  connection.on("error", (err) => {
    console.error(`[db error]`, err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw err;
    }
  });
}

handleConnection();

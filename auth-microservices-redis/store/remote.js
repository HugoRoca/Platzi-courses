const request = require("request");

function createRemoteDB(host, port) {
  const URL = `http://${host}:${port}`;

  function requestFunc(method, table, data) {
    let url = `${URL}/${table}`;
    let body = "";

    return new Promise((resolve, reject) => {
      request(
        {
          method,
          headers: { "content-type": "application/json" },
          url,
          body,
        },
        (err, req, body) => {
          if (err) {
            console.log("An error ocurred on DB", err);
            reject(err);
          }

          const result = JSON.parse(body);
          return resolve(result);
        }
      );
    });
  }

  function list(table) {
    return requestFunc("GET", table);
  }

  function get(table, id) {}

  function updateInsert(table, data, isNew) {}

  function query(table, query, join) {}

  return {
    list,
  };
}

module.exports = createRemoteDB;

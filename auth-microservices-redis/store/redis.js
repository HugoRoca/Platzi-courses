const redis = require("redis");

const config = require("../config");

const client = new redis.createClient({
  host: config.cache.host,
  port: config.cache.port_cache,
  password: config.cache.password,
});

async function list(table) {
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err);
      let res = data || null;
      if (res) {
        res = JSON.stringify(res);
      }

      resolve(res);
    });
  });
}

async function get(table, id) {}

async function updateInsert(table, data, isNew) {
  let key = table;
  if (data && isNew) {
    key = `${key}_${data.id}`;
  }

  client.setex(key, 10, JSON.stringify(data));
  return true;
}

module.exports = {
  list,
  get,
};

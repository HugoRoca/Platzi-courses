const db = {};

async function list(table) {
  return db[table] || [];
}

async function get(table, id) {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}

function updateInsert(table, data) {
  if (!db[table]) db[table] = [];
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

async function query(table, q) {
  let col = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];

  return col.filter((item) => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  updateInsert,
  remove,
  query,
};

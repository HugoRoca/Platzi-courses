const db = {
  user: [{ id: "1", name: "hugo" }],
};

async function list(table) {
  return db[table];
}

async function get(table, id) {
  let collection = await list(table);
  console.log(collection);
  return collection.filter((item) => item.id === id)[0] || null;
}

function updateInsert(table, data) {
  db[table].push(data);
}

function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  updateInsert,
  remove,
};

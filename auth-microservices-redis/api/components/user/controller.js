const { nanoid } = require("nanoid");

const store = require("../../../store/dummy");
const TABLE = "user";

module.exports = (injectStore) => {
  let store = injectStore;

  if (!store) store = require("../../../store/dummy");

  async function list() {
    return store.list(TABLE);
  }

  async function get(id) {
    return store.get(TABLE, id);
  }

  async function updateInsert(body) {
    const user = {
      name: body.name,
      id: body.id || nanoid(),
    };

    return store.updateInsert(TABLE, user);
  }

  return {
    list,
    get,
    updateInsert,
  };
};

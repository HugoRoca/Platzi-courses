const { nanoid } = require("nanoid");

const TABLE = "post";

module.exports = (injectStore) => {
  let store = injectStore;

  if (!store) store = require("../../../store/dummy");

  async function list() {
    return await store.list(TABLE);
  }

  async function insert(body, userId) {
    const data = {
      id: nanoid(),
      text: body.text,
      user: userId,
    };
    return await store.updateInsert(TABLE, data, true);
  }

  async function update(body, postId) {
    const data = {
      text: body.text,
      id: postId,
    };
    return await store.updateInsert(TABLE, data, false);
  }

  async function getById(id) {
    return await store.get(TABLE, id);
  }

  return {
    list,
    insert,
    update,
    getById,
  };
};

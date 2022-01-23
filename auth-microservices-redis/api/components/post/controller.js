const TABLE = "post";

module.exports = (injectStore) => {
  let store = injectStore;

  if (!store) store = require("../../../store/dummy");

  async function list() {
    return await store.list(TABLE);
  }

  return {
    list,
  };
};

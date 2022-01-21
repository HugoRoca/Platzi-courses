const { nanoid } = require("nanoid");

const auth = require("../auth");
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
      userName: body.userName,
      id: nanoid(),
    };

    if (body.password || body.userName) {
      await auth.updateInsert({
        id: user.id,
        userName: user.userName,
        password: body.password,
      });
    }

    return store.updateInsert(TABLE, user);
  }

  return {
    list,
    get,
    updateInsert,
  };
};

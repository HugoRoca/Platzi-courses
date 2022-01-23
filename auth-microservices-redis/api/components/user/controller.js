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
    let isNew = false;
    const user = {
      name: body.name,
      userName: body.userName,
      id: nanoid(),
    };

    if (body.password || body.userName) {
      isNew = true;
      await auth.updateInsert(
        {
          id: user.id,
          userName: user.userName,
          password: body.password,
        },
        true
      );
    }

    return store.updateInsert(TABLE, user, isNew);
  }

  async function follow(from, to) {
    return await store.updateInsert(
      `${TABLE}_follow`,
      {
        user_from: from,
        user_to: to,
      },
      true
    );
  }

  async function following(id) {
    const join = {};
    join[TABLE] = "user_to";
    const query = { user_from: id };
    console.log(join, query);
    return await store.query(`${TABLE}_follow`, query, join);
  }

  return {
    list,
    get,
    updateInsert,
    follow,
    following,
  };
};

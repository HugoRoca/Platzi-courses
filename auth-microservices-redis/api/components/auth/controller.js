const bcrypt = require("bcrypt");

const auth = require("../../../auth");
const TABLE = "auth";

module.exports = function (injectStore) {
  let store = injectStore;

  if (!store) store = require("../../../store/dummy");

  async function updateInsert(data) {
    const authData = {
      id: data.id,
      userName: data.userName || undefined,
    };

    authData.password = await bcrypt.hash(data.password, 10);

    return store.updateInsert(TABLE, authData);
  }

  async function login(userName, password) {
    const data = await store.query(TABLE, { userName });
    if (!data) throw new Error("Information invalid");

    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) throw new Error("Information invalid");

    return auth.sign(data);
  }

  async function get() {
    return store.list(TABLE);
  }

  return { updateInsert, login, get };
};

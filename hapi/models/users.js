const bcrypt = require("bcrypt");

module.exports = class {
  constructor(db) {
    this.db = db;
    this.ref = this.db.ref("/");
    this.collection = this.ref.child("users");
  }

  async create(data) {
    const user = { ...data };
    user.password = await this.encrypt(user.password);

    const newUser = this.collection.push(user);

    return newUser.key;
  }

  async validateUser(data) {
    const user = { ...data };
    const userQuery = await this.collection
      .orderByChild("email")
      .equalTo(user.email)
      .once("value");

    const userFound = userQuery.val();

    if (!userFound) return false;

    const [, userId] = Object.entries(userFound)[0];

    const passwordRight = await bcrypt.compare(user.password, userId.password);
    const result = passwordRight ? userId : false;

    return result;
  }

  async encrypt(password) {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    return hashPassword;
  }
};

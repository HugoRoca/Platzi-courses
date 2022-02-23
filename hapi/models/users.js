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

  async encrypt(password) {
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    return hashPassword;
  }
};

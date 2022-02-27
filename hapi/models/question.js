module.exports = class {
  constructor(db) {
    this.db = db;
    this.ref = this.db.ref("/");
    this.collection = this.ref.child("questions");
  }

  async create(args, user) {
    const data = { ...args };
    data.owner = user;

    const questions = this.collection.push(data);

    return questions.key;
  }

  async getLast(amount) {
    const query = await this.collection.limitToLast(amount).once("value");
    const data = query.val();

    return data;
  }

  async getOne(id) {
    const query = await this.collection.child(id).once("value");
    const data = query.val();

    return data;
  }

  async answer(args, user) {
    const data = { ...args };
    const answers = await this.collection.child(data.id).child("answers").push({
      text: data.answer,
      user: user,
    });

    return answers;
  }
};

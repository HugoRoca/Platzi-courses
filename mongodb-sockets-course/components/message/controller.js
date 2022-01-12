const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject("User or message not be empty");
    }
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };

    store.addMessage(fullMessage);

    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.getMessages());
  });
}

module.exports = {
  addMessage,
  getMessages,
};

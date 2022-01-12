const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return list;
}

module.exports = {
  addMessage,
  getMessages,
};

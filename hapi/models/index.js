const firebase = require("firebase-admin");
const serviceAccount = require("../config/firebase.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://hapi-test-6e36a-default-rtdb.firebaseio.com",
});

const db = firebase.database();

const User = require("./users");

module.exports = {
  users: new User(db),
};

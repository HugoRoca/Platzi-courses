const express = require("express");

const config = require("../config.js");

const errors = require("../network/errors");
const router = require("./network");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errors);
app.use("/", router);

app.listen(config.cache.port, () => {
  console.log(`Running on port ${config.cache.port}`);
});

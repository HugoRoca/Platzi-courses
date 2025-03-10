const express = require("express");

const config = require("../config");
const router = require("./network");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(config.mysql_service.port, () => {
  console.log(`Running on port ${config.mysql_service.port}`);
});

const express = require("express");
const swaggerUi = require("swagger-ui-express");

const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");

const swaggerDoc = require("../docs.json");
const errors = require("../network/errors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`Running on port ${config.api.port}`);
});

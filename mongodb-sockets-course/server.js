const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./response");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/message", (req, res) => {
  if (req.query.error) {
    response.error(req, res, "test error", `It's only simulation`);
  }

  res.header({
    "custom-header": "our custom value",
  });
  response.success(req, res, "Message list");
});

router.delete("/message", (req, res) => {
  console.log("only delete message");
  response.success(req, res, "Saved");
});
app.use(router);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("running on port 3000");

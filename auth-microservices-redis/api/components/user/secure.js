const auth = require("../../../auth");

module.exports = (action) => {
  function middleware(req, res, next) {
    switch (action) {
      case "update":
        const owner = req.body.id;
        auth.check.own(req, owner);
        next();
        break;
      case "follow":
      case "post":
        auth.check.logged(req);
        next();
        break;
      default:
        next();
        break;
    }
  }

  return middleware;
};

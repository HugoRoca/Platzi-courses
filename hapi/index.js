const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
const handlebars = require("handlebars");
const path = require("path");
const vision = require("vision");

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: "localhost",
  routes: {
    files: {
      relativeTo: path.join(__dirname, "public"),
    },
  },
});

async function init() {
  try {
    await server.register(inert);
    await server.register(vision);

    server.views({
      engines: {
        hbs: handlebars,
      },
      relativeTo: __dirname,
      path: "views",
      layout: true,
      layoutPath: "views",
    });

    server.route({
      method: "GET",
      path: "/",
      handler: (req, h) => {
        return h.view("index", { title: "Home" });
      },
    });

    server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: ".",
          index: ["index.html"],
        },
      },
    });

    server.route({
      method: "GET",
      path: "/register",
      handler: (req, h) => {
        return h.view("register", {
          title: "Register",
        });
      },
    });

    server.route({
      method: "POST",
      path: "/create-user",
      handler: (req, h) => {
        console.log(req.payload);
        return "user created";
      },
    });

    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running in port ${server.info.uri}`);
}

init();

const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const handlebars = require("handlebars");
const path = require("path");

const routes = require("./routes");

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

    server.state("user", {
      ttl: 1000 * 60 * 60 * 24 * 7, // a week
      isSecure: process.env.NODE_ENV === "production",
      encoding: "base64json",
    });

    server.views({
      engines: {
        hbs: handlebars,
      },
      relativeTo: __dirname,
      path: "views",
      layout: true,
      layoutPath: "views",
    });

    server.route(routes);

    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running in port ${server.info.uri}`);
}

init();

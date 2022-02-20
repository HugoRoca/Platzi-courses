const Hapi = require("@hapi/hapi");

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: "localhost",
});

async function init() {
  server.route({
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return h.response("Hello word!").code(200);
    },
  });

  server.route({
    method: "GET",
    path: "/redirect",
    handler: (req, h) => {
      return h.redirect("https://google.com");
    },
  });

  try {
    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running in port ${server.info.uri}`);
}

init();

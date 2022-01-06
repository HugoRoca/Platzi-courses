const sharp = require("sharp");

sharp("original.jpg").resize(80).toFile("candy1.jpg");

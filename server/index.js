const { config } = require("dotenv");
config({ path: "../.env" });
require("./build/server.js");

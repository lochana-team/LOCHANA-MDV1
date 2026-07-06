const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "c7BhXLJZ#tq-pCAyR9p7HYz1fYCPdEmwpEmjKNBMLEjgG6c21qBs",
  MONGODB: process.env.MONGODB || "mongodb://mongo:IeoZIgtakotzMpPwOuqfzzwSvwgtjDxc@hayabusa.proxy.rlwy.net:45065",
  OWNER_NUM: process.env.OWNER_NUM || "94775497858",
};

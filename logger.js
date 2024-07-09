// logger.js
const fs = require("fs");
const path = require("path");

const logStream = fs.createWriteStream(path.join(__dirname, "request.log"), {
  flags: "a",
});

const logger = (req, res, next) => {
  const { method, url, ip, socket } = req;
  const timestamp = new Date().toISOString();
  const logMessage = `TimeStamp :[${timestamp}] Method :${method} ${url} Ip Address :${ip}\n`;
  //   console.log(socket.remoteAddress);

  // Write the log message to the console
  console.log(logMessage);

  // Write the log message to a file
  logStream.write(logMessage);

  // Pass control to the next middleware
  next();
};

module.exports = logger;

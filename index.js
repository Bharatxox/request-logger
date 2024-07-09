// app.js
const express = require("express");
const logger = require("./logger");

const app = express();

// Use the logger middleware
app.use(logger);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

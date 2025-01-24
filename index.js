const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({
    message: "Server Up and Running in Docker Container🎉",
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res.json({
    service: "gateway",
    message: "CTSE Lab 07 gateway is running",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gateway listening on port ${PORT}`);
});

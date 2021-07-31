const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));

// app.get("/mac", async (_req, res) => {
//   return res.download(path.join(__dirname, "UBC GYM APP.dmg"));
// });

// app.get("/win", async (_req, res) => {
//   return res.download(path.join(__dirname, "UBC GYM-win32-x64.zip"));
// });

app.use((err, _req, res, _next) => {
  if (err) {
    return res.send(err.message);
  }
});

app.listen(process.env.port || process.env.PORT || 9999, () => {
  console.log(
    `server started at ${process.env.port || process.env.PORT || 9999}`
  );
});

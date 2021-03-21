const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
  console.log(`server is started on port ${port}`);
});

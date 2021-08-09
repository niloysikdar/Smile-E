const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const createEnvelope = require("./routes/sendEnvelope");
app.use("/create", createEnvelope);

app.listen(5000, () => {
  console.log("Server is Running on port: 5000");
});

const express = require("express");
const app = express();
const studentRoute = require("./routes");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello ");
});
app.use("/api/v1/students", studentRoute);
app.listen(3000, () => {
  console.log("Listering on 3000");
});

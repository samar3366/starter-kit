import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Woxsaxxarld!");
});

app.listen(port, () => {
  console.log(`server app listening at ${port}`);
});

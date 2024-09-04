import express from "express";
const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  res.send(`Hello! My name is ${process.env.NAME}.`);
});

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});
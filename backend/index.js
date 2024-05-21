const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();

const { generateAccessToken, authenticateToken } = require("./auth.js");

app.use(bodyParser.json());

const data = [
  { id: 1, username: "talhabinnasir" },
  { id: 2, username: "johncena" },
];

app.post("/login", (req, res) => {
  const { username } = req.body;
  const user = data.find((user) => user.username === username);
  if (user) {
    const token = generateAccessToken(req.body);
    res
      .status(200)
      .json({ message: `${username} successfully logged in!, Toke: ${token}` });
  } else {
    res.status(401).json({ message: `Error! Please try again.` });
  }
});

app.get("/protected", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "You have accessed a protected route!", user: req.user });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});

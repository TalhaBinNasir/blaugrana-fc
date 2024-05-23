const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/registerUser");
const app = express();

const { generateAccessToken, authenticateToken } = require("./auth/auth.js");

app.use(bodyParser.json());

app.use("/", loginRoute);
app.use("/", registerRoute);

// app.get("/protected", authenticateToken, (req, res) => {
//   res
//     .status(200)
//     .json({ message: "You have accessed a protected route!", user: req.user });
// });

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});

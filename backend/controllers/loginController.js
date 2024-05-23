const db = require("../database/db.js");
const { generateAccessToken } = require("../auth/auth.js");

const loginController = async (req, res) => {
  const { username } = req.body;
  try {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    const user = result.rows[0];
    if (user) {
      const token = generateAccessToken({ username });
      res.status(200).json({
        message: `${username} successfully logged in!, Token: ${token}`,
      });
    } else {
      res.status(401).json({ message: "Error! Please try again." });
    }
  } catch (err) {
    console.error("Error during login", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  loginController,
};

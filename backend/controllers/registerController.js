const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../auth/auth.js");
const userSchema = require("../schemas/userSchema.js");
const db = require("../database/db.js");

const registerController = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error });
  }

  const { username, firstName, lastName, email, password, dob } = req.body;
  try {
    const checkUsername = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (checkUsername.rows.length > 0) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const registerUser = await db.query(
      "INSERT INTO users (username, first_name, last_name, email, password, dob) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [username, firstName, lastName, email, hashedPassword, dob]
    );

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: registerUser.rows[0].id,
        username: registerUser.rows[0].username,
      },
    });
  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerController };

const jwt = require("jsonwebtoken");

function generateAccessToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const secret = process.env.SECRET_ACCESS_TOKEN;
  const options = { expiresIn: "6h" };

  return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token) {
  const secret = process.env.SECRET_ACCESS_TOKEN;

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }

  req.user = result.data;
  next();
}
module.exports = { generateAccessToken, verifyAccessToken, authenticateToken };

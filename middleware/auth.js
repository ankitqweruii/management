const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });
  console.log("add console in code")
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

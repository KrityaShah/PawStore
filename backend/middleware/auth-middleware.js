const jwt = require("jsonwebtoken");
const User = require("../model/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  console.log("Token from auth middleware", jwtToken);

  try {
    // Verify the token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    // You can directly use decoded data, no need to fetch the user again
    const userData = {
      userId: decoded.userId, // userId from the decoded token
      isAdmin: decoded.isAdmin, // isAdmin from the decoded token
    };

    // Attach user data to the request object for downstream use
    req.user = userData;
    req.token = token;
    req.userID = decoded.userId;

    next(); // Proceed to the next middleware or route handler

  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Invalid token" });
  }
};

module.exports = authMiddleware;

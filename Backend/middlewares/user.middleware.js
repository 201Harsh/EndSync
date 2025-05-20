const jwt = require("jsonwebtoken");

module.exports.AuthUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      errors: "Unauthorized",
    });
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        errors: "Unauthorized",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      errors: "Unauthorized",
    });
  }
};

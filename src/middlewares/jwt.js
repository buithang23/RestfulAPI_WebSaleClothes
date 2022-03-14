const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");

exports.AuthJWT = (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    throw new ApiError(401, "Unauthorized");
  }
  const token = headerToken.split(" ")[1];
  if (!token) {
    throw new ApiError(401, "Unauthorized");
  }
  try {
    const user = jwt.verify(token, process.env.JWT_KEY);
    req.user = user;
    next();
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "Token is expired");
    }
  }
};

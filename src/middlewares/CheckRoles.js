const ApiError = require("../utils/ApiError");

exports.userRole =
  (...roles) =>
  (req, res, next) => {
    const userRoler = req.user.Role;
    if (!userRoler.includes(roles) || !userRoler) {
      throw new ApiError(403, "Access Denied");
    }
    next();
  };

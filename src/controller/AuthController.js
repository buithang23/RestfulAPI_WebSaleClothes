const User = require("../modeljs/User");
const ApiError = require("../utils/ApiError");
const CatchAsync = require("../middlewares/CatchAsync");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const MailService = require("../utils/MailService");

exports.login = CatchAsync(async (req, res) => {
  const { Email, Password } = req.body;
  const existEmail = await User.findOne({ Email });

  if (!existEmail) {
    throw new ApiError(400, "Email or Password not true");
  }
  const isMath = bcrypt.compareSync(Password, existEmail.Password);
  if (!isMath) {
    throw new ApiError(400, "Email or Password not true");
  }
  const token = jwt.sign(
    {
      id: existEmail._id,
      Name: existEmail.Name,
      Email: existEmail.Email,
      Role: existEmail.Role,
    },
    process.env.JWT_KEY,
    {
      expiresIn: "1h",
    }
  );
  res.json({
    success: true,
    token,
  });
});

exports.register = CatchAsync(async (req, res) => {
  const { Name, Email, Password, Age } = req.body;
  const user = await User.create({ Name, Email, Password });
  res.json({
    success: true,
    data: user,
  });
});

exports.forgotPassword = CatchAsync(async (req, res) => {
  const { Email } = req.body;
  const exsitmail = await User.findOne({ Email });
  if (!exsitmail) {
    throw new ApiError(400, "Email not found");
  }
  const newSecretKey = process.env.JWT_KEY + exsitmail.Password;
  const newToken = jwt.sign(
    { Email: exsitmail.Email, Name: exsitmail.Name },
    newSecretKey,
    {
      expiresIn: "20s",
    }
  );

  const protocol = req.protocol;
  const host = req.get("host");
  const originalUrl = req.originalUrl.replace("forgot", "reset");

  const link = `${protocol}://${host}${originalUrl}/${exsitmail._id}/${newToken}`;
  // await MailService.sendMail(
  //   `"Buithang" <foo@example.com>`,
  //   Email,
  //   "Reset Password",
  //   `Click on this link to reset password: ${link}`
  // );
  res.json({
    success: true,
    LinkResetPassword: link,
  });
});

exports.resetPassword = CatchAsync(async (req, res) => {
  const { id, token } = req.params;
  const { newpassord, confirmpassword } = req.body;
  const existUser = await User.findById(id);
  if (newpassord !== confirmpassword) {
    throw new ApiError(400, "Confirm password not incorrest");
  }
  const newSecretKey = process.env.JWT_KEY + existUser.Password;
  try {
    const usertoken = jwt.verify(token, newSecretKey);
    existUser.Password = newpassord;
    await existUser.save();
    res.json({
      success: true,
    });
  } catch {
    throw new ApiError(401, "Link is expired");
  }
});

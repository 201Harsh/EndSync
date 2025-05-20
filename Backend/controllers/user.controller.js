const UserModel = require("../models/user.model");
const userServices = require("../services/user.service");
const { validationResult } = require("express-validator");
const transporter = require("../services/mail.service");

module.exports.registerTempUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    });
  }

  const { name, email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      errors: "Email is required",
    });
  }

  const otp = String(Math.floor(1000 + Math.random() * 9000));

  const info = await transporter.sendMail({
    from: '"EndSync" <endgamingai2@gmail.com>',
    to: email,
    subject: "Account Verification",
    html: `<h1>Verify your account</h1>
    <p>Here is your verification code: ${otp}</p>`,
  });

  const hashedPassword = await UserModel.hashPassword(password);

  const TempUser = await userServices.createTempUser({
    name,
    email,
    password: hashedPassword,
    otp,
  });

  return res.status(200).json(TempUser);
};

module.exports.verifyandRegisterUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    });
  }

  const { email, otp } = req.body;

  const User = await userServices.verifyandRegisterUser({
    email,
    otp,
  });

  const token = User.jwtToken();

  res.cookie("token", token, {
    httpOnly: true,
  });

  return res.status(200).json({
    msg: "User registered successfully",
    User,
    token,
  });
};

module.exports.loginUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    });
  }

  const { email, password } = req.body;

  const User = await UserModel.findOne({ email });

  if (!User) {
    return res.status(400).json({
      errors: "User not found",
    });
  }

  const isPasswordMatch = await User.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      errors: "Invalid password",
    });
  }

  const token = User.jwtToken();

  res.cookie("token", token, {
    httpOnly: true,
  });

  return res.status(200).json({
    msg: "User logged in successfully",
    User,
    token,
  });
};

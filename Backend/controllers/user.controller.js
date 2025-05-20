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

  try {
    const { name, email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }

    const IsUserExists = await UserModel.findOne({ email });

    if (IsUserExists) {
      return res.status(400).json({
        error: "User already exists",
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
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports.verifyandRegisterUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({
      errors: error.array(),
    });
  }

  try {
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
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
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
      error: "Invalid Credentials",
    });
  }

  const isPasswordMatch = await User.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      error: "Invalid Credentials",
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

module.exports.getProfile = async (req, res) => {
  const User = req.user;

  const getUser = await UserModel.findById(User.id);

  return res.status(200).json(getUser);
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    msg: "User logged out successfully",
  });
};

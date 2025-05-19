const userModel = require("../models/user.model");
const TempUserModel = require("../models/TempUser.model");

module.exports.createTempUser = async ({ name, email, password, otp }) => {
  if (!name || !email || !password || !otp) {
    throw new Error("All fields are required");
  }
  const TempUser = await TempUserModel.create({
    name,
    email,
    password,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  });
  return TempUser;
};

module.exports.verifyandRegisterUser = async ({ email, otp }) => {
  if (!email || !otp) {
    throw new Error("All fields are required");
  }
  const TempUser = await TempUserModel.findOne({ email });
  if (TempUser.otp !== otp) {
    throw new Error("Invalid OTP");
  }
  if (Date.now() > TempUser.expiresAt) {
    await TempUserModel.deleteOne({ email });
    throw new Error("OTP expired");
  }

  const isUserExists = await userModel.findOne({ email });
  if (isUserExists) {
    throw new Error("User already exists");
  }

  const User = await userModel.create({
    name: TempUser.name,
    email: TempUser.email,
    password: TempUser.password,
  });
  await TempUserModel.deleteOne({ email });
  return User;
};

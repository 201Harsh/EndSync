const mongoose = require("mongoose");

const TempUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

TempUserSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

const TempUser = mongoose.model("TempUser", TempUserSchema);
module.exports = TempUser;

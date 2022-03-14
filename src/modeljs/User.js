const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { ROLES } = require("../constants/role");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    Name: {
      type: String,
      required: [true, "Name is required"],
    },
    Email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already existed"],
    },
    Password: {
      type: String,
      required: [true, "Password is required"],
    },
    Telephone: {
      type: String,
    },
    Age: {
      type: String,
    },
    Address: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    Role: {
      type: String,
      enum: ROLES,
      default: ROLES.GUEST,
    },
  },
  {
    collection: "bt-Users",
  }
);

UserSchema.pre("save", function (next) {
  if (this.isModified("Password")) {
    const salt = bcrypt.genSaltSync();
    const hashPassword = bcrypt.hashSync(this.Password, salt);
    this.Password = hashPassword;
  }
  next();
});
module.exports = mongoose.model("User", UserSchema);

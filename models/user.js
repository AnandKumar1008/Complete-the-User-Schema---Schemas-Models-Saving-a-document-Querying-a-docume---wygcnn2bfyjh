const { string } = require("joi");
var mongoose = require("mongoose");

//Write your schema here with name of schema as userSchema
userSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  pswd: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
  },
};

module.exports = mongoose.model("users", userSchema);

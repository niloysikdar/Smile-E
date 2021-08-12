const moment = require("moment");
const User = require("../models/user");

const createUser = async (name, role) => {
  let res = true;
  const user = {
    name: name,
    joined: moment().format("ll"),
    role: role,
  };
  const newUser = new User(user);
  try {
    await newUser.save();
    res = true;
  } catch (err) {
    console.log(err.message);
    res = false;
  }
  return res;
};

module.exports = createUser;

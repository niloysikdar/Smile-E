const moment = require("moment");
const User = require("../models/user");

const createUser = async (name) => {
  let res = true;
  const user = {
    name: name,
    joined: moment().format("ll"),
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

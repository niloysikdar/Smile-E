const User = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users.reverse());
  } catch (error) {
    console.log(error.message);
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = getUsers;

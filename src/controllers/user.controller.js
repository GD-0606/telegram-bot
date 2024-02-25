const userModel = require("../models/user.model");
const createUser = async (req, res, next) => {
  try {
    const user = new userModel({ ...req.body });
    await user.save();
    res.status(200).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
};

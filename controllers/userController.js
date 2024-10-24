const User = require("../models/userModel");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile } = req.body;
    const user = new User({ name, email, mobile });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Retrieve user details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

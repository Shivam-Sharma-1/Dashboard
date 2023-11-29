import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

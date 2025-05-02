import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (user) =>
  jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
export const register = async (req, res, next) => {
  try {
    const { name, email, password, country } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password, country });

    res
      .status(201)
      .json({ token: generateToken(user), user: { name: user.name } });
  } catch (err) {
    next(err);
  }
};

// Login route
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("name email password");

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ token: generateToken(user), user: { name: user.name } });
  } catch (err) {
    next(err);
  }
};

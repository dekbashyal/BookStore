import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = (req, res) => {
  // Logic to get all users
  try {
    return res.status(200).json({
      status: "success",
      data: "Get all users",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      data: err.message,
    });
  }
};

export const getUserById = (req, res) => {
  // Logic to get a user by ID
  try {
    const { id } = req.params || {};
    return res.status(200).json({
      status: "success",
      data: `Get user with ID: ${req.params.id}`,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      data: err.message,
    });
  }
};

export const login = async (req, res) => {
  // Logic to create a new user
  const { email, password } = req.body ?? {};
  try {
    const isExist = await User.findOne({ email });
    if (!isExist)
      return res.status(404).json({
        status: "error",
        data: "User not found",
      });
    const pass = bcrypt.compareSync(password, isExist.password);

    if (!pass)
      return res.status(401).json({
        status: "error",
        data: "Invalid credentials",
      });

    const token = jwt.sign(
      {
        id: isExist._id,
        role: isExist.role,
      },
      "secret",
    );

    res.status(200).json({
      status: "success",
      data: {
        token,
        user: isExist,
      },
      message: "User logged in successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      data: err.message,
    });
  }
};

export const register = async (req, res) => {
  // Logic to register a new user
  const { username, email, password, role } = req.body ?? {};
  try {
    const hashpass = bcrypt.hashSync(password, 8);
    await User.create({
      username,
      email,
      password: hashpass,
      role,
    });
    return res.status(200).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      data: err.message,
    });
  }
};

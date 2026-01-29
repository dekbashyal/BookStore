// import User from "../../../models/User.js";

// export const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const userFound = await User.findOne({ email });
//     if (userFound) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const user = await User.create({ username, email, password });
//     res.status(201).json({ status: "success", data: user });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

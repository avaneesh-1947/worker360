import express from "express";
import User from "../DB/user.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
<<<<<<< HEAD
    const client = await User.findOne({ email ,password});
=======
  const client = await User.findOne({ email });
>>>>>>> 4c01de6652b0b881f2500b5740e78c1b499e4f23
  if (!client) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Check password
  if (client.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  // Success
  return res.status(200).json({ message: "Login successful", user: client });
});

export default router;

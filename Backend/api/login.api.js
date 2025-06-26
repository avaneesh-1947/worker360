import express from "express";
import User from "../DB/user.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const client = await User.findOne({ email });

  if (!client) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  if (client.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  return res.status(200).json({ message: "Login successful", user: client });
});

export default router;

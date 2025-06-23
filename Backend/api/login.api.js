import express from "express";
import User from "../DB/user.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
    const client = await User.findOne({ email ,password});
  if (!client) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

export default router;

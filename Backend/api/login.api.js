import express from "express";
import user from "../DB/user.js";
import worker from "../DB/worker.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { identifier, password } = req.body;

  // Try to find client by email
  let foundUser = await user.findOne({ email: identifier });
  if (foundUser) {
    if (foundUser.password === password) {
      return res.status(200).json({ message: "Login successful", role: "client", user: foundUser });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  }

  
  let foundWorker = await worker.findOne({ username: identifier });
  if (foundWorker) {
    if (foundWorker.password === password) {
      return res.status(200).json({ message: "Login successful", role: "worker", user: foundWorker });
    } else {
      return res.status(401).json({ message: "Invalid username or password" });
    }
  }

  return res.status(401).json({ message: "Invalid email/username or password" });
});

export default router;

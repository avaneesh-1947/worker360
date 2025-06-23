import express from "express";
import User from "../DB/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
});
export default router;
import express from "express";
import user from "../DB/user.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password, role } = req.body;
    const user = new user({ name, email, password, role });
    await user.save();
    res.status(200).json({ message: "User created successfully" });
});
export default router;
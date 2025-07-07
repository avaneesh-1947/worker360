// import express from "express";
// import worker from "../DB/worker.js";
// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { username, password } = req.body;

//   const foundWorker = await worker.findOne({ username });

//   if (!foundWorker) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }

//   if (foundWorker.password !== password) {
//     return res.status(401).json({ message: "Invalid username or password" });
//   }

//   return res.status(200).json({ message: "Login successful", worker: foundWorker });
// });

// export default router; 
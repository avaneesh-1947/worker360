import express from "express";
import worker from "../DB/worker.js";
const router = express.Router();

router.get("/", async (req, resp) => {
  const data = await worker.find();
  resp.status(200).json(data);
});

export default router;

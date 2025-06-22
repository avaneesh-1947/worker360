import express from "express";
import multer from "multer";
import path from "path";
import worker from "../DB/worker.js";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this 'uploads' directory exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post("/", upload.single('image'), async (req, res) => {
  try {
    const { name, occupation, experience, wageperhr, location, mobile, skills } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const imagePath = req.file.path;

    const newWorker = new worker({
      name,
      occupation,
      experience,
      wageperhr,
      location,
      mobile,
      skills: skills.split(','), // Skills are sent as a comma-separated string
      image: imagePath,
    });

    const savedWorker = await newWorker.save();
    res.status(201).json(savedWorker);
  } catch (error) {
    if (error.code === 11000) { // Handle duplicate mobile number error
      return res.status(409).json({ message: "Mobile number already registered." });
    }
    res.status(500).json({ message: "Server error during registration.", error: error.message });
  }
});

export default router;
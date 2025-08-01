import express from "express";
import multer from "multer";
import path from "path";
import worker from "../DB/worker.js";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Update worker profile
router.post("/", upload.single('image'), async (req, res) => {
  try {
    const { username, name, occupation, experience, wageperhr, location, mobile, skills } = req.body;
    if (!username) {
      return res.status(400).json({ message: "Username is required for update." });
    }
    const updateData = {
      name,
      occupation,
      experience,
      wageperhr,
      location,
      mobile,
      skills: skills ? (Array.isArray(skills) ? skills : skills.split(',').map(s => s.trim())) : undefined,
    };
    if (req.file) {
      updateData.image = req.file.path;
    }
    // Remove undefined fields
    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);
    const updated = await worker.findOneAndUpdate(
      { username },
      { $set: updateData },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Worker not found." });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error during update.", error: error.message });
  }
});

export default router; 
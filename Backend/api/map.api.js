import  express from 'express';
import axios from 'axios';
import Place from  '../DB/map.js';

const  router = express.Router();


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;


// Save a place
router.post('/save', async (req, res) => {
  try {
    const { name, address, placeId, location } = req.body;
    if (!address || !placeId || !location || typeof location.lat !== 'number' || typeof location.lng !== 'number') {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const place = new Place({ name, address, placeId, location });
    await place.save();
    res.status(201).json(place);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Place already exists' });
    }
    res.status(500).json({ error: 'Error saving place', details: error.message });
  }
});

// Get all saved places
router.get('/places', async (req, res) => {
  try {
    const places = await Place.find().sort({ createdAt: -1 });
    res.json(places);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching places' });
  }
});

export default router;


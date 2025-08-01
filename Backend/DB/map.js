import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
  name: { type: String, default: 'Location' },
  address: { type: String, required: true }, // formatted address
  placeId: { type: String, required: true, unique: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});
const Place = mongoose.model('Place', placeSchema);
export default Place;

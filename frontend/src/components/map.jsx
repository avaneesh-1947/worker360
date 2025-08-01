import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const x = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '100%',
  height: '85vh', // Increased height
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
};

const defaultCenter = { lat: 25.7536, lng: 82.6869 };

function Map() {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [form, setForm] = useState({
    name: '',
    address: '',
    placeId: '',
    lat: '',
    lng: ''
  });
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [center, setCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(10); // Add this line

  const mapRef = useRef(null);

  // Fetch all places on mount
  useEffect(() => {
    axios.get('http://localhost:3333/map/places')
      .then(res => setPlaces(res.data))
      .catch(err => setError('Error fetching places'));
  }, []);

  // Pan to searched location when search changes
  useEffect(() => {
    if (search.trim()) {
      const filtered = places.filter(
        place =>
          place.name.toLowerCase().includes(search.toLowerCase()) ||
          place.address.toLowerCase().includes(search.toLowerCase())
      );
      if (filtered.length > 0) {
        setCenter({
          lat: filtered[0].location.lat,
          lng: filtered[0].location.lng
        });
        setSelectedPlace(filtered[0]);
        setZoom(16); // Zoom in when searching!
        if (mapRef.current) {
          mapRef.current.panTo({
            lat: filtered[0].location.lat,
            lng: filtered[0].location.lng
          });
          mapRef.current.setZoom(11); // Also set zoom on map instance
        }
      }
    } else {
      setCenter(defaultCenter);
      setSelectedPlace(null);
      setZoom(10); // Reset zoom
    }
  }, [search, places]);

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  // Submit new place
  const handlePlaceSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post('http://localhost:3333/map/save', {
        name: form.name,
        address: form.address,
        placeId: form.placeId,
        location: {
          lat: Number(form.lat),
          lng: Number(form.lng)
        }
      });
      setPlaces(prev => [res.data, ...prev]);
      setForm({ name: '', address: '', placeId: '', lat: '', lng: '' });
      alert('Place saved successfully!');
    } catch (err) {
      setError(err.response?.data?.error || 'Error saving place');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto mt-18">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Interactive Map</h1>
          <p className="text-gray-600 text-lg">View and add locations</p>
        </div>

        {/* Search Saved Locations */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search saved locations by name or address..."
            className="px-4 py-3 border border-gray-300 rounded-lg w-full max-w-md"
          />
        </div>

        {/* Add Place Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <form onSubmit={handlePlaceSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Place Name"
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleFormChange}
              placeholder="Address"
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="placeId"
              value={form.placeId}
              onChange={handleFormChange}
              placeholder="Place ID"
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              name="lat"
              value={form.lat}
              onChange={handleFormChange}
              placeholder="Latitude"
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="number"
              name="lng"
              value={form.lng}
              onChange={handleFormChange}
              placeholder="Longitude"
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium"
            >
              Save Place
            </button>
          </form>
          {error && (
            <div className="mt-2 text-red-600">{error}</div>
          )}
        </div>

        {/* Google Map with Markers */}
        <LoadScript googleMapsApiKey={x}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom} // Use zoom state here
            options={{
              zoomControl: true,
              streetViewControl: true,
              mapTypeControl: true,
              fullscreenControl: true
            }}
            onLoad={map => (mapRef.current = map)}
          >
            {places
              .filter(place =>
                place.name.toLowerCase().includes(search.toLowerCase()) ||
                place.address.toLowerCase().includes(search.toLowerCase())
              )
              .map(place => (
                <Marker
                  key={place._id}
                  position={{ lat: place.location.lat, lng: place.location.lng }}
                  title={place.name}
                  onClick={() => setSelectedPlace(place)}
                />
              ))}
            {selectedPlace && (
              <InfoWindow
                position={{
                  lat: selectedPlace.location.lat,
                  lng: selectedPlace.location.lng
                }}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div>
                  <h4 className="font-bold">{selectedPlace.name}</h4>
                  <p>{selectedPlace.address}</p>
                  <p className="text-xs text-gray-500">Place ID: {selectedPlace.placeId}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Map;
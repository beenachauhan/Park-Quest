import React, { useState } from 'react';
import '../assets/css/Map.css'; 

const Map = () => {
  // Sample data for national parks
  const parksData = [
    { id: 1, name: 'Yellowstone National Park', location: { lat: 44.42796, lng: -110.58846 } },
    { id: 2, name: 'Yosemite National Park', location: { lat: 37.865101, lng: -119.538329 } },
    // Add more national parks as needed
  ];

  // State to manage the selected park
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="map-container">
      {/* Render the map */}
      <div className="map"></div>

      {/* Render markers for national parks */}
      {parksData.map(park => (
        <Marker
          key={park.id}
          park={park}
          setSelectedPark={setSelectedPark}
        />
      ))}

      {/* Render info window for selected park */}
      {selectedPark && (
        <InfoWindow park={selectedPark} setSelectedPark={setSelectedPark} />
      )}
    </div>
  );
};

// Marker component
const Marker = ({ park, setSelectedPark }) => {
  return (
    <div
      className="marker"
      onClick={() => setSelectedPark(park)}
      style={{ 
        left: `${park.location.lng}%`,
        top: `${park.location.lat}%`
      }}
    ></div>
  );
};

// Info window component
const InfoWindow = ({ park, setSelectedPark }) => {
  return (
    <div className="info-window">
      <h3>{park.name}</h3>
      <button onClick={() => setSelectedPark(null)}>Close</button>
    </div>
  );
};

export default Map;

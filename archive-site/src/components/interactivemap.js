import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SidebarBeinecke from './SidebarBeinecke.js';
import SidebarHQ from './SidebarHQ.js';
import SidebarGrove from './SideGrove.js';
import SidebarBass from './SidebarBass';

// Custom icon configuration
const customIcon = new L.Icon({
  iconUrl: '/mapicon.png',
  iconSize: [40, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const InteractiveMap = () => {
  const locations = [
    {
      name: "Beinecke Plaza",
      position: [41.3115, -72.9270],
      description: "mini-desc",
      sidebarComponent: <SidebarBeinecke />,
    },
    {
      name: "Cross Campus",
      position: [41.3104, -72.9275],
      description: "mini-desc",
      sidebarComponent: <SidebarBass />, // Use the corresponding sidebar component
    },
    {
      name: "Initial Bookshelves",
      position: [41.311474, -72.926415],
      description: "mini-desc",
      sidebarComponent: <SidebarHQ />, // Add SidebarHumanities component
    },
    {
      name: "College & Grove",
      position: [41.31158, -72.92558],
      description: "mini-desc",
      sidebarComponent: <SidebarGrove />, // Add SidebarCollegeX component
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Map container moved to the left side */}
      <div style={{ width: '50%' }}>
        <MapContainer center={[41.3111, -72.9267]} zoom={17} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> contributors'
          />
          {locations.map((loc, index) => (
            <Marker
              key={index}
              position={loc.position}
              icon={customIcon}
              eventHandlers={{
                click: () => setSelectedLocation(loc),
              }}
            >
              <Popup>
                <h3>{loc.name}</h3>
                <p>{loc.description}</p>
                {/* You could optionally include an image here if needed */}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div style={{ width: '50%', overflowY: 'auto', padding: '20px', backgroundColor: '#f8f8f8' }}>
        {selectedLocation ? (
          <>
            <h3>{selectedLocation.name}</h3>
            {/* <p>{selectedLocation.description}</p> */}
            {/* Render the corresponding sidebar component */}
            {selectedLocation.sidebarComponent}
          </>
        ) : (
          <p>Select a location on the map to view details here.</p>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;

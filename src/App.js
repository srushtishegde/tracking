import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrackingComponent = () => {
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('API_ENDPOINT', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        setTrackingData(response.data);
      } catch (error) {
        console.error('Error fetching tracking data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Display the tracking data in your component */}
      {trackingData && (
        <div>
          {/* Render tracking information */}
        </div>
      )}
    </div>
  );
};

export default TrackingComponent;

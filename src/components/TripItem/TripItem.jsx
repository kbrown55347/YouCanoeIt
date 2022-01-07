import React from 'react';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button } from '@mui/material';


function TripItem({ trip }) {

  const history = useHistory();

  return (
    <div className="trip_list_item">
      <h4>{trip.trip_name}</h4>
      <p>{trip.start_date} to {trip.end_date}</p>

      <img
        src={trip.image_url}
        alt='trip image'
      >
      </img>
      <br></br>
      <Button
        variant="contained"
        style={{ backgroundColor: '#a1b26a', color: 'white' }}
        // send user to trip details page on click of View Details button
        onClick={() => {
          history.push(`/trip_details/${trip.id}`);
        }}
      >View Details</Button>
    </div>
  );
}

export default TripItem;

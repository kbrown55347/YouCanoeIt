import React from 'react';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button } from '@mui/material';
// import css
import './TripItem.css';


function TripItem({ trip }) {

  const history = useHistory();

  return (
    <div className="card">
      <p className="trip_title">{trip.trip_name}</p>
      <p className="dates">Dates: {trip.start_date} to {trip.end_date}</p>
      <img
        src={trip.image_url}
        alt='trip image'
      >
      </img>
      <br></br>
      <Button
        variant="contained"
        style={{ backgroundColor: '#68453A', color: '#FEFEFA' }}
        // send user to trip details page on click of View Details button
        onClick={() => {
          history.push(`/trip_details/${trip.id}`);
        }}
      >View Details</Button>
    </div>
  );
}

export default TripItem;

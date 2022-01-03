import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, Grid } from '@mui/material';

// import css
import './UserPage.css';

function UserPage() {
  // to access reducers in this component
  const user = useSelector((store) => store.user);
  const pastTrips = useSelector(store => store.pastTrips);

  const dispatch = useDispatch();
  const history = useHistory();

  // on page load fetch past trips
  useEffect(() => {
    dispatch({ type: 'FETCH_PAST_TRIPS' })
  }, []);

  return (
    <div className="container">
      <h3>Welcome, {user.username}!</h3>

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <h2 className="page-title">Past Trips</h2>
        {/* Add Trip button */}
        <Button
          variant="contained"
          style={{ backgroundColor: '#8fa253', color: 'white' }}
          // send user to add trip page on click of Add Trip button
          onClick={() => {
            history.push('/add');
          }}
        >Add Trip
        </Button>
      </Grid>

      {/* map through pastTrips reducer and append each item to DOM */}
      {pastTrips.map(trip => (
        <div key={trip.id} className="trips_list">
          {trip.trip_name}
          <br></br>
          {/* using .slice(0,10) to only return dates and get rid
          of extras */}
          {trip.start_date.slice(0,10)} to {trip.end_date.slice(0,10)}
          <br></br>
          <img
            src={trip.image_url}
            alt='trip image'
          >
          </img>
          <br></br>
          <Button
            variant="contained"
            style={{ backgroundColor: '#8fa253', color: 'white' }}
            // send user to trip details page on click of View Details button
            onClick={() => {
              history.push(`/trip_details/${trip.id}`);
            }}
          >View Details</Button>
          <br></br>
        </div>
      ))
      }

    </div >
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TripItem from '../TripItem/TripItem';
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
          style={{ backgroundColor: '#a1b26a', color: 'white' }}
          // send user to add trip page on click of Add Trip button
          onClick={() => {
            history.push('/add');
          }}
        >Add Trip
        </Button>
      </Grid>

      {/* map through pastTrips reducer and append 
      each trip item to DOM using props*/}
      {pastTrips.map(trip => {
        return <TripItem key={trip.id} trip={trip}/>
      })}

    </div >
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

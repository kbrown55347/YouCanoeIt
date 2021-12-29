import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, Grid } from '@mui/material';

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

  // send user to add trip page on click of Add Trip button
  const handleAddTripClick = () => {
    history.push('/add');
  };

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
          onClick={handleAddTripClick}
        >Add Trip
        </Button>
      </Grid>

      <div>

      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

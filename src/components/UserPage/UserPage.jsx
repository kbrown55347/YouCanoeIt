import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// MUI imports
import { Button, Grid } from '@mui/material';

function UserPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // on page load fetch past trips
  useEffect(() => {
    dispatch({ type: 'FETCH_PAST_TRIPS' })
  }, []);


  // add function to send user to add trip page on click of button

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
        // onClick={function to send user to add trip page}
        > Add Trip
        </Button>
      </Grid>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

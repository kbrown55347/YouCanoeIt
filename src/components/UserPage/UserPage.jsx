import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function UserPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // on page load fetch past trips
  useEffect(() => {
    dispatch({type: 'FETCH_PAST_TRIPS'})
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

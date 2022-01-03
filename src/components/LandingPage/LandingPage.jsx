import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
// MUI imports
import { Button, Grid } from '@mui/material';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  // on click of Register, send to registration page
  const onRegister = (event) => {
    history.push('/registration');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

    {/* Login Button */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <p>Already a Member?</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#8fa253', color: 'white' }}
          onClick={onLogin}
        >Login</Button>
      </Grid>

      {/* Register Button */}
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <p>New Member?</p>
        <Button
          variant="contained"
          style={{ backgroundColor: '#8fa253', color: 'white' }}
          onClick={onRegister}
        >Register</Button>
      </Grid>


          <p>About App</p>

    </div>
  );
}

export default LandingPage;

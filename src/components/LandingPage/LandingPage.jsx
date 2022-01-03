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


      <h2>About</h2>
      <img
        src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/elymn/DSC01124_a6403509-4789-4f3d-9e31-0848dd4b782a.jpg"
        alt="BWCA image">
      </img>
      <p>The Boundary Waters Canoe Area (BWCA) Wilderness in northeastern Minnesota spans over 1 million acres of natural lakes and land. After successfully completing a camping and canoeing trip in this beautiful area, you can document it using YouCanoeIt. YouCanoeIt allows you to post, view, edit and delete BWCA trips. You can include details such as lakes traveled, longest portage, entry/exit points and more. Use the application to refer back to your past trips when planning for upcoming trips, when wanting to share suggestions and experiences with others, or when just feeling nostalgic!</p>

    </div>
  );
}

export default LandingPage;

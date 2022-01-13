import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
// MUI imports
import { Button, Grid } from '@mui/material';

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
          style={{ backgroundColor: '#68453A', color: '#FEFEFA' }}
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
          style={{ backgroundColor: '#68453A', color: '#FEFEFA' }}
          onClick={onRegister}
        >Register</Button>
      </Grid>


      <h2>About</h2>
      <img
        src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/elymn/DSC01124_a6403509-4789-4f3d-9e31-0848dd4b782a.jpg"
        alt="BWCAW image">
      </img>
      <p>The Boundary Waters Canoe Area Wilderness (BWCAW) spans over 
        1 million acres of preserved lakes and land in northeastern 
        Minnesota. After completing a camping, portaging
        and canoeing trip in this serene region, you can document 
        your great accomplishment using YouCanoeIt. YouCanoeIt allows you to 
        post, view, edit and delete your BWCAW trips. Include a trip image and 
        details such as lakes traveled, longest portage and entry/exit points. 
        Use the application to refer back to previous trips when 
        planning for upcoming ones, when sharing suggestions and experiences 
        with others, or when simply feeling nostalgic!</p>

    </div>
  );
};

export default LandingPage;

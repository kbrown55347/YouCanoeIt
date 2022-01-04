import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// MUI imports
import { Button, Grid } from '@mui/material';
// MUI imports for delete confirmation
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// import css
import './TripDetails.css';

// for MUI delete confirmation alert
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TripDetails() {
    const dispatch = useDispatch();
    // useParams so detail page is aware of clicked item
    const params = useParams();
    // console.log('******** PARAMS:', params);
    const tripDetails = useSelector(store => store.tripDetails);

    // on page load fetch clicked trip details
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_DETAILS',
            payload: params.id
        })
    }, []);

    // for MUI delete confirmation alert
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">

            <h2 className="page-title">Trip Details</h2>

            <div key={tripDetails.id}>
                <h4>{tripDetails.trip_name}</h4>
                <p>Dates: {tripDetails.start_date} to {tripDetails.end_date}</p>
                <p>Entry Point: {tripDetails.entry_point} & Exit Point: {tripDetails.exit_point}</p>
                <p>Longest Portage: {tripDetails.longest_portage}</p>
                <p>Lakes: {tripDetails.lakes}</p>
                <p>Trip Comments: {tripDetails.comments}</p>
                <img
                    src={tripDetails.image_url}
                    alt='trip image'
                >
                </img>
                <p>{tripDetails.image_description}</p>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        style={{ backgroundColor: '#a1b26a', color: 'white' }}>
                        Edit
                    </Button>

                    {/* MUI delete confirmation alert */}
                    <Button 
                        variant="contained"
                        style={{ backgroundColor: '#e0857c', color: 'white' }}
                        onClick={handleClickOpen}>
                        Delete
                    </Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Delete this trip?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Clicking delete will remove this trip from your account.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Nevermind</Button>
                            <Button onClick={handleClose}>Delete</Button>
                        </DialogActions>
                    </Dialog>

                </Grid>

            </div>

        </div >
    )
};

export default TripDetails;
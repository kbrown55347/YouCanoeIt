import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// MUI imports
import { Button, Grid } from '@mui/material';
// MUI imports for delete confirmation
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
// sweetalert imports
import swal from '@sweetalert/with-react';
// import css page
import './TripDetails.css';

// for MUI delete confirmation alert
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function TripDetails() {
    const dispatch = useDispatch();
    const history = useHistory();
    // useParams so detail page is aware of clicked item
    const params = useParams();
    // access trip details reducer
    const tripDetails = useSelector(store => store.tripDetails);

    // on page load fetch clicked trip details
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_DETAILS',
            payload: params.id
        });
        // start at top of page
        window.scrollTo(0, 0);
    }, []);

    // for MUI delete confirmation alert
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // handle click of edit button
    const handleEditClick = () => {
        // clear reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
        // send user to edit trip page with id
        history.push(`/edit_trip/${tripDetails.id}`);
    };

    // on click of delete button in MUI alert
    const handleAlertDeleteClick = () => {
        // dispatch to saga to delete trip
        dispatch({
            type: 'DELETE_TRIP',
            payload: params.id
        })
        // trip deleted confirmation alert
        swal({
            text: "This trip has been removed from your account.",
            icon: "success",
        });
        // clear reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
        // send user to user page after trip is deleted
        history.push('/user')
    };

    return (
        <div className="container">

            <h2 className="page-title">Trip Details</h2>

            {/* trip details info */}
            <div key={tripDetails.id} className="card">
                <h4>{tripDetails.trip_name}</h4>
                <img
                    src={tripDetails.image_url}
                    alt='trip image'
                >
                </img>

                {/* bulk of trip info displayed in table */}
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2">Dates: <em>{tripDetails.start_date}</em> to <em>{tripDetails.end_date}</em></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Entry Point: <em>{tripDetails.entry_point}</em></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Exit Point: <em>{tripDetails.exit_point}</em></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Longest Portage: <em>{tripDetails.longest_portage}</em></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Lakes: <em>{tripDetails.lakes}</em></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Comments: <em>{tripDetails.comments}</em></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* buttons */}
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#68453A', color: '#FEFEFA' }}
                    onClick={handleEditClick}
                >
                    Edit
                </Button>

                {/* delete button and MUI delete confirmation alert */}
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#FEFEFA', color: 'black' }}
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
                        <Button onClick={handleAlertDeleteClick}>Delete</Button>
                    </DialogActions>
                </Dialog>

            </Grid>
        </div >
    )
};

export default TripDetails;
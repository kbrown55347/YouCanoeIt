import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid, Box } from '@mui/material';
// MUI imports for date range picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
// sweetalert imports
import swal from '@sweetalert/with-react'

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    /* access trip details reducer */
    const tripDetails = useSelector(store => store.tripDetails);

    // on page load fetch trip details for trip to edit
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_DETAILS',
            payload: params.id
        });
        // start at top of page
        window.scrollTo(0, 0);
    }, []);

    // handle trip name change
    const handleTripNameChange = (event) => {
        dispatch({
            type: 'EDIT_TRIP_NAME',
            payload: event.target.value
        });
    };

    // handle trip date changes
    const handleTripDateChanges = (values) => {
        // separate values and assign to variables
        let startDate = values[0];
        let endDate = values[1];
        // dispatch to reducer, send start date
        dispatch({
            type: 'EDIT_START_DATE',
            payload: startDate
        });
        // dispatch to reducer, send end date
        dispatch({
            type: 'EDIT_END_DATE',
            payload: endDate
        });
    };

    // handle entry point change
    const handleEntryPointChange = (event) => {
        dispatch({
            type: 'EDIT_ENTRY_POINT',
            payload: event.target.value
        });
    };

    // handle exit point change
    const handleExitPointChange = (event) => {
        dispatch({
            type: 'EDIT_EXIT_POINT',
            payload: event.target.value
        });
    };

    // handle longest portage change
    const handleLongestPortageChange = (event) => {
        dispatch({
            type: 'EDIT_LONGEST_PORTAGE',
            payload: event.target.value
        });
    };

    // handle lakes change
    const handleLakesChange = (event) => {
        dispatch({
            type: 'EDIT_LAKES',
            payload: event.target.value
        });
    };

    // handle comments change
    const handleCommentsChange = (event) => {
        dispatch({
            type: 'EDIT_COMMENTS',
            payload: event.target.value
        });
    };

    // handle click of save button
    const handleSaveClick = () => {

        // store reducer info in variables
        const tripId = tripDetails.id;
        const tripName = tripDetails.trip_name;
        const startDate = tripDetails.start_date;
        const endDate = tripDetails.end_date;
        const entryPoint = tripDetails.entry_point;
        const exitPoint = tripDetails.exit_point;
        const longestPortage = tripDetails.longest_portage;
        const lakes = tripDetails.lakes;
        const tripComments = tripDetails.comments;
        const imagePath = tripDetails.image_url;

        // bundle trip edits into object
        const tripEdits = {
            tripId, tripName, startDate, endDate,
            entryPoint, exitPoint, longestPortage,
            lakes, tripComments, imagePath
        };
        // dispatch object to saga function
        dispatch({
            type: 'SEND_TRIP_EDITS',
            payload: tripEdits
        });
        // trip details updated confirmation alert
        swal({
            text: "Your trip details have been updated!",
            icon: "success",
        });
        // clear trip details reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
        // send user to user page
        history.push('/user');
    };

    // handle click of cancel button
    const handleCancelClick = () => {
        // send user back to details page for trip
        history.push(`/trip_details/${tripDetails.id}`);
        // clear trip details reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
    };

    return (
        <div className="container">

            <h2 className="page-title">Edit Trip Info</h2>

            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {/* info for trip_name */}
                <TextField
                    variant="outlined"
                    type='text'
                    value={tripDetails.trip_name || ''}
                    label='Trip Name'
                    style={{ width: '100%' }}
                    onChange={handleTripNameChange}
                />
            </Grid>
            <br></br>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >

                {/* info for start_date and end_date using 
                MUI date range picker */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateRangePicker
                        startText="Start Date"
                        endText="End Date"
                        value={[tripDetails.start_date, tripDetails.end_date] || [null, null]}
                        onChange={(newValues) => {
                            handleTripDateChanges(newValues);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 1 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            </Grid>
            <br></br>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {/* info for entry_point */}
                <TextField
                    variant="outlined"
                    type='text'
                    value={tripDetails.entry_point || ''}
                    label='Entry Point'
                    style={{ width: '45%' }}
                    onChange={handleEntryPointChange}
                />
                <Box sx={{ mx: 1 }}> to </Box>
                {/* info for exit_point */}
                <TextField
                    variant="outlined"
                    type='text'
                    value={tripDetails.exit_point || ''}
                    label='Exit Point'
                    style={{ width: '45%' }}
                    onChange={handleExitPointChange}
                />
            </Grid>
            <br></br>

            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {/* info for longest_portage */}
                <TextField
                    variant="outlined"
                    type='text'
                    value={tripDetails.longest_portage || ''}
                    label='Longest Portage'
                    style={{ width: '100%' }}
                    onChange={handleLongestPortageChange}
                />
                <br></br>
                {/* info for lakes */}
                <TextField
                    variant="outlined"
                    type='text' multiline rows={2}
                    value={tripDetails.lakes || ''}
                    label='Lakes Traveled'
                    style={{ width: '100%' }}
                    onChange={handleLakesChange}
                />
                <br></br>
                {/* info for comments */}
                <TextField
                    variant="outlined"
                    type='text' multiline rows={2}
                    value={tripDetails.comments || ''}
                    label='Trip Comments'
                    style={{ width: '100%' }}
                    onChange={handleCommentsChange}
                />
                <br></br>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#a1b26a', color: 'black' }}
                    onClick={handleSaveClick}
                >
                    Save
                </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    onClick={handleCancelClick}
                >
                    Cancel
                </Button>
            </Grid>

        </div>
    )
}; // end EditTrip

export default EditTrip;
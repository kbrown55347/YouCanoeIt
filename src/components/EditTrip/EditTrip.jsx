import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid } from '@mui/material';

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();

    // on page load fetch trip details for trip to edit
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_DETAILS',
            payload: params.id
        })
    }, []);

    /* access trip details reducer */
    const tripDetails = useSelector(store => store.tripDetails);
    console.log('in EditTrip', tripDetails);

    const params = useParams();

    // handle trip name change
    const handleTripNameChange = (event) => {
        dispatch({
            type: 'EDIT_TRIP_NAME',
            payload: event.target.value
        });
    };

    // handle start date change
    const handleStartDateChange = (event) => {
        dispatch({
            type: 'EDIT_START_DATE',
            payload: event.target.value
        });
    };

    // handle end date change
    const handleEndDateChange = (event) => {
        dispatch({
            type: 'EDIT_END_DATE',
            payload: event.target.value
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

    // local states to collect trip info
    // set initial value of state to equal info from tripDetails reducer
    // let [startDate, setStartDate] = useState(tripDetails.start_date);
    // let [endDate, setEndDate] = useState(tripDetails.end_date);
    // let [entryPoint, setEntryPoint] = useState(tripDetails.entry_point);
    // let [exitPoint, setExitPoint] = useState(tripDetails.exit_point);
    // let [longestPortage, setLongestPortage] = useState(tripDetails.longest_portage);
    // let [lakes, setLakes] = useState(tripDetails.lakes);
    // let [tripComments, setTripComments] = useState(tripDetails.comments);
    // let [imagePath, setImagePath] = useState(tripDetails.image_url);
    // let [imageDescription, setImageDescription] = useState(tripDetails.image_description);

    // let tripId = tripDetails.id;

    // console.log('tripName', tripName);
    // console.log('startDate', startDate);

    // handle click of save button
    // const handleSaveClick = () => {
    //     // bundle trip edits into object
    //     const tripEdits = {
    //         tripId, tripName, startDate, endDate,
    //         entryPoint, exitPoint, longestPortage,
    //         lakes, tripComments, imagePath,
    //         imageDescription
    //     };
    //     console.log('tripEdits object', tripEdits);

    // dispatch object to saga function
    // dispatch({
    //     type: 'SEND_TRIP_EDITS',
    //     payload: tripEdits
    // });

    // send user to user page
    //     history.push('/user');
    // };

    return (
        <div className="container">

            <h2 className="page-title">Edit Trip</h2>

            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {/* info for trip_name */}
                <TextField
                    variant="standard"
                    type='text'
                    value={tripDetails.trip_name || ''}
                    label='Trip Name'
                    style={{ width: '90%' }}
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
                {/* info for start_date */}
                <TextField
                    variant="standard"
                    type='text'
                    value={tripDetails.start_date || ''}
                    label='Start Date'
                    placeholder='MM/DD/YYYY'
                    style={{ width: '43%' }}
                    onChange={handleStartDateChange}
                />
                {/* info for end_date */}
                <TextField
                    variant="standard"
                    type='text'
                    value={tripDetails.end_date || ''}
                    label='End Date'
                    placeholder='MM/DD/YYYY'
                    style={{ width: '43%' }}
                    onChange={handleEndDateChange}
                />
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
                    variant="standard"
                    type='text'
                    value={tripDetails.entry_point || ''}
                    label='Entry Point'
                    style={{ width: '43%' }}
                    onChange={handleEntryPointChange}
                />
                {/* info for exit_point */}
                <TextField
                    variant="standard"
                    type='text'
                    value={tripDetails.exit_point || ''}
                    label='Exit Point'
                    style={{ width: '43%' }}
                    onChange={handleExitPointChange}
                />
            </Grid>
            <br></br>

            {/* <Grid
                container
                direction="column"
                alignItems="center"
            > */}
            {/* info for longest_portage */}
            {/* <TextField
                    variant="standard"
                    type='text'
                    value={longestPortage}
                    label='Longest Portage'
                    style={{ width: '90%' }}
                    onChange={(event) => setLongestPortage(event.target.value)} />
                <br></br> */}
            {/* info for lakes */}
            {/* <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={lakes}
                    label='Lakes Traveled'
                    style={{ width: '90%' }}
                    onChange={(event) => setLakes(event.target.value)} />
                <br></br> */}
            {/* info for comments */}
            {/* <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={tripComments}
                    label='Trip Comments'
                    style={{ width: '90%' }}
                    onChange={(event) => setTripComments(event.target.value)} />
                <br></br> */}
            {/* info for image_url */}
            {/* <TextField
                    variant="standard"
                    value={imagePath}
                    label='Image URL'
                    style={{ width: '90%' }}
                    onChange={(event) => setImagePath(event.target.value)} />
                <br></br> */}
            {/* info for image_description */}
            {/* <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={imageDescription}
                    label='Image Description'
                    style={{ width: '90%' }}
                    onChange={(event) => setImageDescription(event.target.value)} />
                <br></br>
            </Grid> */}

            {/* <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Button
                    variant="contained"
                    style={{ backgroundColor: '#a1b26a', color: 'white' }}
                    onClick={handleSaveClick}
                >
                    Save
                </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    // send user back to user page on click
                    onClick={() => {
                        history.push('/user');
                    }}>
                    Cancel
                </Button>

            </Grid> */}


        </div>
    )

}; // end EditTrip

export default EditTrip;
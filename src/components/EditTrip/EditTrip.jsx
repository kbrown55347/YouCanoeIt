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

    // handle image url change
    const handleImageUrlChange = (event) => {
        dispatch({
            type: 'EDIT_IMAGE_URL',
            payload: event.target.value
        });
    };

    // handle image description change
    const handleImageDescriptionChange = (event) => {
        dispatch({
            type: 'EDIT_IMAGE_DESCRIPTION',
            payload: event.target.value
        });
    };

    // handle click of save button
    const handleSaveClick = () => {

        // store reducer info in variables
        let tripId = tripDetails.id;
        let tripName = tripDetails.trip_name;
        let startDate = tripDetails.start_date;
        let endDate = tripDetails.end_date;
        let entryPoint = tripDetails.entry_point;
        let exitPoint = tripDetails.exit_point;
        let longestPortage = tripDetails.longest_portage;
        let lakes = tripDetails.lakes;
        let tripComments = tripDetails.comments;
        let imagePath = tripDetails.image_url;
        let imageDescription = tripDetails.image_description;

        // bundle trip edits into object
        const tripEdits = {
            tripId, tripName, startDate, endDate,
            entryPoint, exitPoint, longestPortage,
            lakes, tripComments, imagePath,
            imageDescription
        };
        // dispatch object to saga function
        dispatch({
            type: 'SEND_TRIP_EDITS',
            payload: tripEdits
        });
        // clear reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
        // send user to user page
        history.push('/user');
    };

    // handle click of cancel button
    const handleCancelClick = () => {
        // clear reducer
        dispatch({
            type: 'CLEAR_TRIP_DETAILS'
        });
        // send user to user page
        history.push('/user');
    };

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

            <Grid
                container
                direction="column"
                alignItems="center"
            >
                {/* info for longest_portage */}
                <TextField
                    variant="standard"
                    type='text'
                    value={tripDetails.longest_portage || ''}
                    label='Longest Portage'
                    style={{ width: '90%' }}
                    onChange={handleLongestPortageChange}
                />
                <br></br>
                {/* info for lakes */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={tripDetails.lakes || ''}
                    label='Lakes Traveled'
                    style={{ width: '90%' }}
                    onChange={handleLakesChange}
                />
                <br></br>
                {/* info for comments */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={tripDetails.comments || ''}
                    label='Trip Comments'
                    style={{ width: '90%' }}
                    onChange={handleCommentsChange}
                />
                <br></br>
                {/* info for image_url */}
                <TextField
                    variant="standard"
                    value={tripDetails.image_url || ''}
                    label='Image URL'
                    style={{ width: '90%' }}
                    onChange={handleImageUrlChange}
                />
                <br></br>
                {/* info for image_description */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={tripDetails.image_description || ''}
                    label='Image Description'
                    style={{ width: '90%' }}
                    onChange={handleImageDescriptionChange}
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
                    style={{ backgroundColor: '#a1b26a', color: 'white' }}
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
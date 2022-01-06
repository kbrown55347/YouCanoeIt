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
    // console.log('in EditTrip', tripDetails);

    const params = useParams();

    // local states to collect trip info
    // set initial value of state to equal info from tripDetails reducer
    let [tripName, setTripName] = useState(tripDetails.trip_name);
    let [startDate, setStartDate] = useState(tripDetails.start_date);
    let [endDate, setEndDate] = useState(tripDetails.end_date);
    let [entryPoint, setEntryPoint] = useState(tripDetails.entry_point);
    let [exitPoint, setExitPoint] = useState(tripDetails.exit_point);
    let [longestPortage, setLongestPortage] = useState(tripDetails.longest_portage);
    let [lakes, setLakes] = useState(tripDetails.lakes);
    let [tripComments, setTripComments] = useState(tripDetails.comments);
    let [imagePath, setImagePath] = useState(tripDetails.image_url);
    let [imageDescription, setImageDescription] = useState(tripDetails.image_description);

    let tripId = tripDetails.id;

    // console.log('tripName', tripName);
    // console.log('startDate', startDate);

    // handle click of save button
    const handleSaveClick = () => {
        // bundle trip edits into object
        const tripEdits = {
            tripId, tripName, startDate, endDate,
            entryPoint, exitPoint, longestPortage,
            lakes, tripComments, imagePath,
            imageDescription
        };
        console.log('tripEdits object', tripEdits);

        // dispatch object to saga function
        dispatch({
            type: 'SEND_TRIP_EDITS',
            payload: tripEdits
        });
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
                    value={tripName}
                    label='Trip Name'
                    style={{ width: '90%' }}
                    onChange={(event) => setTripName(event.target.value)} />
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
                    value={startDate}
                    label='Start Date'
                    placeholder='MM/DD/YYYY'
                    style={{ width: '43%' }}
                    onChange={(event) => setStartDate(event.target.value)} />
                {/* info for end_date */}
                <TextField
                    variant="standard"
                    type='text'
                    value={endDate}
                    label='End Date'
                    placeholder='MM/DD/YYYY'
                    style={{ width: '43%' }}
                    onChange={(event) => setEndDate(event.target.value)} />
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
                    value={entryPoint}
                    label='Entry Point'
                    style={{ width: '43%' }}
                    onChange={(event) => setEntryPoint(event.target.value)} />
                {/* info for exit_point */}
                <TextField
                    variant="standard"
                    type='text'
                    value={exitPoint}
                    label='Exit Point'
                    style={{ width: '43%' }}
                    onChange={(event) => setExitPoint(event.target.value)} />
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
                    value={longestPortage}
                    label='Longest Portage'
                    style={{ width: '90%' }}
                    onChange={(event) => setLongestPortage(event.target.value)} />
                <br></br>
                {/* info for lakes */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={lakes}
                    label='Lakes Traveled'
                    style={{ width: '90%' }}
                    onChange={(event) => setLakes(event.target.value)} />
                <br></br>
                {/* info for comments */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={tripComments}
                    label='Trip Comments'
                    style={{ width: '90%' }}
                    onChange={(event) => setTripComments(event.target.value)} />
                <br></br>
                {/* info for image_url */}
                <TextField
                    variant="standard"
                    value={imagePath}
                    label='Image URL'
                    style={{ width: '90%' }}
                    onChange={(event) => setImagePath(event.target.value)} />
                <br></br>
                {/* info for image_description */}
                <TextField
                    variant="standard"
                    type='text' multiline rows={2}
                    value={imageDescription}
                    label='Image Description'
                    style={{ width: '90%' }}
                    onChange={(event) => setImageDescription(event.target.value)} />
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
                    // send user back to user page on click
                    onClick={() => {
                        history.push('/user');
                    }}>
                    Cancel
                </Button>

            </Grid>


        </div>
    )

}; // end EditTrip

export default EditTrip;
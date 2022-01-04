import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid } from '@mui/material';


function AddTrip() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local states for db trip info
    let [tripName, setTripName] = useState('');
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [entryPoint, setEntryPoint] = useState('');
    let [exitPoint, setExitPoint] = useState('');
    let [longestPortage, setLongestPortage] = useState('');
    let [lakes, setLakes] = useState('');
    let [tripComments, setTripComments] = useState('');
    let [imagePath, setImagePath] = useState('');
    let [imageDescription, setImageDescription] = useState('');

    console.log(imageDescription);

    return (
        <div className="container">
            <h2 className="page-title">Add Trip</h2>

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
                    style={{ backgroundColor: '#a1b26a', color: 'white' }}>
                    Add Trip
                </Button>

                <Button
                    variant="contained"
                    style={{ backgroundColor: 'white', color: 'black' }}
                    onClick={() => {
                        history.push('/user');
                    }}>
                    Cancel
                </Button>

            </Grid>

        </div>
    )
}; // end Add Trip

export default AddTrip;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid } from '@mui/material';
// MUI imports for date picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
// sweetalert imports
import swal from '@sweetalert/with-react';


function AddTrip() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local states to collect trip info
    let [tripName, setTripName] = useState('');
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState('');
    let [entryPoint, setEntryPoint] = useState('');
    let [exitPoint, setExitPoint] = useState('');
    let [longestPortage, setLongestPortage] = useState('');
    let [lakes, setLakes] = useState('');
    let [tripComments, setTripComments] = useState('');
    let [imagePath, setImagePath] = useState('');
    let [imageDescription, setImageDescription] = useState('');

    // handle click of add trip button
    const handleAddTripClick = () => {
        console.log('in newTripInfo object, startDate:', startDate);
        console.log('in newTripInfo object, endDate:', endDate);

        // bundle new trip into object
        const newTripInfo = {
            tripName, startDate, endDate,
            entryPoint, exitPoint, longestPortage,
            lakes, tripComments, imagePath,
            imageDescription
        };
        // check if fields are filled in
        if (tripName === '' || startDate === '' || endDate === '' ||
            entryPoint === '' || exitPoint === '' || longestPortage === '' ||
            lakes === '' || tripComments === '' || imagePath === '' ||
            imageDescription === '') {
            alert('Please fill out all information fields to add trip.');
        } else {
            // dispatch object
            dispatch({
                type: 'ADD_NEW_TRIP',
                payload: newTripInfo
            });
            // trip added confirmation alert
            swal({
                text: "Your trip has been added!",
                icon: "success",
            });
            // send user to user page
            history.push('/user');
        };
    }; // end handleAddTripClick

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
                {/* <TextField
                    variant="standard"
                    type='text'
                    value={startDate}
                    label='Start Date'
                    placeholder='MM/DD/YYYY'
                    style={{ width: '43%' }}
                    onChange={(event) => setStartDate(event.target.value)} /> */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                        label="Start Date"
                        inputFormat="MM/dd/yyyy"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
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
                    onClick={handleAddTripClick}>
                    Add Trip
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
}; // end AddTrip

export default AddTrip;
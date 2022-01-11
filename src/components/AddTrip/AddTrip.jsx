import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid, Box } from '@mui/material';
// MUI imports for date range picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
// import to reformat date to send to db
import { format } from 'date-fns';
// sweetalert imports
import swal from '@sweetalert/with-react';
// import css page
import './AddTrip.css';

function AddTrip() {

    const dispatch = useDispatch();
    const history = useHistory();
    // local states to collect trip info
    const [tripName, setTripName] = useState('');
    const [tripDateRange, setTripDateRange] = useState([null, null]);
    const [entryPoint, setEntryPoint] = useState('');
    const [exitPoint, setExitPoint] = useState('');
    const [longestPortage, setLongestPortage] = useState('');
    const [lakes, setLakes] = useState('');
    const [tripComments, setTripComments] = useState('');
    // for image upload
    const [selectedFile, setSelectedFile] = useState('');

    // handle click of add trip button
    const handleAddTripClick = (e) => {
        // prevent form from submitting, need to perform other actions first
        e.preventDefault();
        // need to reformat dates in order to send to db
        const startDateToFormat = tripDateRange[0];
        const endDateToFormat = tripDateRange[1];
        const startDate = format(startDateToFormat, 'yyyy/MM/dd');
        const endDate = format(endDateToFormat, 'yyyy/MM/dd');

        // check if fields are filled in
        if (tripName === '' || startDate === '' || endDate === '' ||
            entryPoint === '' || exitPoint === '' || longestPortage === '' ||
            lakes === '' || tripComments === '' || selectedFile === '') {
            alert('Please fill out all information fields to add trip.');
        } else {
            // send dispatch to add new trip saga with trip information
            dispatch({
                type: 'ADD_NEW_TRIP',
                payload: {
                    tripName, startDate, endDate, entryPoint, exitPoint,
                    longestPortage, lakes, tripComments, selectedFile
                }
            });
            // trip added confirmation alert
            swal({
                text: "Your trip has been added!",
                icon: "success",
            });
            // send user to user page
            history.push('/user');
        }
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
                    variant="outlined"
                    type='text'
                    value={tripName}
                    label='Trip Name'
                    style={{ width: '100%' }}
                    onChange={(event) => setTripName(event.target.value)} />
            </Grid>
            <br></br>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {/* info for start_date and end_date using MUI date range picker */}
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateRangePicker
                        startText="Start Date"
                        endText="End Date"
                        value={tripDateRange}
                        onChange={(newValue) => {
                            setTripDateRange(newValue);
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
                    value={entryPoint}
                    label='Entry Point'
                    style={{ width: '45%' }}
                    onChange={(event) => setEntryPoint(event.target.value)} />
                <Box sx={{ mx: 1 }}> to </Box>
                {/* info for exit_point */}
                <TextField
                    variant="outlined"
                    type='text'
                    value={exitPoint}
                    label='Exit Point'
                    style={{ width: '45%' }}
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
                    variant="outlined"
                    type='text'
                    value={longestPortage}
                    label='Longest Portage'
                    style={{ width: '100%' }}
                    onChange={(event) => setLongestPortage(event.target.value)} />
                <br></br>
                {/* info for lakes */}
                <TextField
                    variant="outlined"
                    type='text' multiline rows={2}
                    value={lakes}
                    label='Lakes Traveled'
                    style={{ width: '100%' }}
                    onChange={(event) => setLakes(event.target.value)} />
                <br></br>
                {/* info for comments */}
                <TextField
                    variant="outlined"
                    type='text' multiline rows={2}
                    value={tripComments}
                    label='Trip Comments'
                    style={{ width: '100%' }}
                    onChange={(event) => setTripComments(event.target.value)} />
                <br></br>

                {/* image upload */}
                <form className="uploadForm"
                    onSubmit={handleAddTripClick}>
                    <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])} />
                    {/* // if image has been selected by user, append preview to DOM */}
                    {selectedFile && <img
                        className="img"
                        src={URL.createObjectURL(selectedFile)}
                        alt="image"
                    />}
                    <br></br>
                    <button>Add Trip</button>
                </form>

            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
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
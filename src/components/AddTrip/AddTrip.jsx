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

    // console.log(tripName);

    return (
        <div className="container">
            <h2 className="page-title">Add Trip</h2>

            {/* info for trip_name */}
            <TextField
                variant="standard"
                type='text'
                value={tripName}
                placeholder='Trip Name'
                style ={{width: '75%'}}
                onChange={(event) => setTripName(event.target.value)} />

            {/* info for start_date */}
            <TextField
                variant="standard"
                type='text'
                value={startDate}
                placeholder='Start Date MM/DD/YYYY'
                style ={{width: '75%'}}
                onChange={(event) => setStartDate(event.target.value)} />

        </div>
    )
}; // end Add Trip

export default AddTrip;
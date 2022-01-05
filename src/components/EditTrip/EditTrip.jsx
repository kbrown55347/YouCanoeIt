import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid } from '@mui/material';

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();
    /* access trip details reducer of trip that was previously
    clicked on to view details */
    const tripDetails = useSelector(store => store.tripDetails);
    console.log(tripDetails);

    return (
        <div className="container">

            <h2 className="page-title">Edit Trip</h2>

        </div>
    )

}; // end EditTrip

export default EditTrip;
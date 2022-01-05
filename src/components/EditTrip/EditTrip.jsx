import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// MUI imports
import { Button, TextField, Grid } from '@mui/material';

function EditTrip() {
    const dispatch = useDispatch();
    const history = useHistory();

    // /* access trip details reducer of trip that was previously
    // clicked on to view details */
    // const tripDetails = useSelector(store => store.tripDetails);
    // console.log(tripDetails);

    const params = useParams();

    // // local states to collect trip info
    // // set initial value of state to equal info from tripDetails reducer
    // let [tripName, setTripName] = useState(tripDetails.trip_name);
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

    // // bundle trip edits into object
    // const tripEdits = {
    //     tripId, tripName, startDate, endDate,
    //     entryPoint, exitPoint, longestPortage,
    //     lakes, tripComments, imagePath,
    //     imageDescription
    // };
    // console.log(tripEdits);

    // on page load fetch trip details for trip to edit
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_TO_EDIT',
            payload: params.id
        })
    }, []);

    return (
        <div className="container">

            <h2 className="page-title">Edit Trip</h2>

        </div>
    )

}; // end EditTrip

export default EditTrip;
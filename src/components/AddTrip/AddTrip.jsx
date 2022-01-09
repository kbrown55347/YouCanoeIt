import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import axios for upload to cloudinary API
import axios from 'axios';
// require dotenv - SECURITY
// require('dotenv').config();
// MUI imports
import { Button, TextField, Grid, Box } from '@mui/material';
// MUI imports for date range picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
// sweetalert imports
import swal from '@sweetalert/with-react';
// import css
import './AddTrip.css';
// for getting image from cloudinary
import { Image } from 'cloudinary-react';


function AddTrip() {

    const dispatch = useDispatch();
    const history = useHistory();

    // local states to collect trip info
    let [tripName, setTripName] = useState('');
    let [tripDateRange, setTripDateRange] = useState([null, null]);
    let [entryPoint, setEntryPoint] = useState('');
    let [exitPoint, setExitPoint] = useState('');
    let [longestPortage, setLongestPortage] = useState('');
    let [lakes, setLakes] = useState('');
    let [tripComments, setTripComments] = useState('');
    let [imagePath, setImagePath] = useState('');
    let [imageDescription, setImageDescription] = useState('');

    // state to hold image file
    const [imageSelected, setImageSelected] = useState('');
    const [cloudinaryImageUrl, setCloudinaryImageUrl] = useState('');
    // handle image upload
    const uploadImage = () => {
        // const { CLOUDINARY_CLOUD_NAME } = process.env;
        // const { CLOUDINARY_UPLOAD_PRESET } = process.env;
        // const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        // console.log(files[0]);
        // make API request to cloudinary
        const formData = new FormData();
        // append file we want to work with to form data
        formData.append('file', imageSelected);
        // append cloudinary public upload presets
        formData.append('upload_preset', 'upload_preset');
        // make axios POST request to send info to cloudinary w/ endpoint image/upload
        axios.post(`https://api.cloudinary.com/v1_1/cloud_name/image/upload`, formData)
            .then((response) => {
                console.log(response.data.url);
                setCloudinaryImageUrl(response.data.url);
            });
    };



    // handle click of add trip button
    const handleAddTripClick = () => {

        let startDate = tripDateRange[0];
        let endDate = tripDateRange[1];

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
                direction="column"
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
                <div>
                    <input type="file"
                        onChange={(event) => { setImageSelected(event.target.files[0]) }}
                    />
                    <button
                        onClick={uploadImage}
                    >Upload Image</button>
                    {/* <Image
                        cloudName=""
                        style={{width: 200}}
                        publicId={cloudinaryPublicId}
                    /> */}
                    <img
                        src={cloudinaryImageUrl}
                        alt="image"
                    />
                </div>

                {/* info for image_url */}
                {/* <TextField
                    variant="outlined"
                    value={imagePath}
                    label='Image URL'
                    style={{ width: '100%' }}
                    onChange={(event) => setImagePath(event.target.value)} />
                <br></br> */}
                {/* info for image_description */}
                <TextField
                    variant="outlined"
                    type='text' multiline rows={2}
                    value={imageDescription}
                    label='Image Description'
                    style={{ width: '100%' }}
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
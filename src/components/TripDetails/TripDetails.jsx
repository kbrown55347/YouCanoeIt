import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import css
import './TripDetails.css';

function TripDetails() {
    const dispatch = useDispatch();
    // useParams so detail page is aware of clicked item
    const params = useParams();
    // console.log('******** PARAMS:', params);
    const tripDetails = useSelector(store => store.tripDetails);

    // on page load fetch clicked trip details
    useEffect(() => {
        // get trip details
        dispatch({
            type: 'FETCH_TRIP_DETAILS',
            payload: params.id
        })
    }, []);

    // const startDate = tripDetails.start_date.slice(0, 10)
    // const endDate = tripDetails.end_date.slice(0, 10)
    // console.log('tripDetails reducer:', tripDetails);

    return (
        <div className="container">

            <h2 className="page-title">Trip Details</h2>

            <div key={tripDetails.id}>
                <h4>{tripDetails.trip_name}</h4>
                <p>Dates: {tripDetails.start_date} to {tripDetails.end_date}</p>
                <p>Entry Point: {tripDetails.entry_point} & Exit Point: {tripDetails.exit_point}</p>
                <p>Longest Portage: {tripDetails.longest_portage}</p>
                <p>Lakes: {tripDetails.lakes}</p>
                <p>Trip Comments: {tripDetails.comments}</p>
                <img
                    src={tripDetails.image_url}
                    alt='trip image'
                >
                </img>
                <p>{tripDetails.image_description}</p>

            </div>

        </div>
    )
};

export default TripDetails;
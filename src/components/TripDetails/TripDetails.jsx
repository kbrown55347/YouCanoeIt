import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';

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

    console.log(tripDetails);

    return (
        <div className="container">

            <h2 className="page-title">Trip Details</h2>

        </div>
    )
};

export default TripDetails;
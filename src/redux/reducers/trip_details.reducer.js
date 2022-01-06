/* reducer to hold trip details for trip 
details and edit trip views */
const tripDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIP_DETAILS':
            return action.payload;
        case 'EDIT_TRIP_NAME':
            return { ...state, trip_name: action.payload };
        case 'EDIT_START_DATE':
            return { ...state, start_date: action.payload };
        case 'EDIT_END_DATE':
            return { ...state, end_date: action.payload };
        default:
            return state;
    }
};

export default tripDetails;
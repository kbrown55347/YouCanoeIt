// reducer to hold trip details
const tripDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRIP_DETAILS':
            return action.payload;
        case 'EDIT_TRIP_NAME':
            return {...state, trip_name: action.payload};
        default:
            return state;
    }
};

export default tripDetails;
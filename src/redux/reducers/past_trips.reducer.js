// reducer to hold users past trip information
const pastTrips = (state = [], action) => {
    switch (action.type) {
        case 'SET_PAST_TRIPS':
            return action.payload;
        default:
            return state;
    }
};

export default pastTrips;
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
        case 'EDIT_ENTRY_POINT':
            return { ...state, entry_point: action.payload };
        case 'EDIT_EXIT_POINT':
            return { ...state, exit_point: action.payload };
        case 'EDIT_LONGEST_PORTAGE':
            return { ...state, longest_portage: action.payload };
        case 'EDIT_LAKES':
            return { ...state, lakes: action.payload };
        case 'EDIT_COMMENTS':
            return { ...state, comments: action.payload };
        case 'EDIT_IMAGE_URL':
            return { ...state, image_url: action.payload };
        case 'EDIT_IMAGE_DESCRIPTION':
            return { ...state, image_description: action.payload };
        default:
            return state;
    }
};

export default tripDetails;
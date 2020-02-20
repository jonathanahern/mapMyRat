import {
    RECEIVE_TOUR,
    RECEIVE_TOURS
} from '../actions/tour_actions';

const toursReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TOUR:
            return Object.assign({}, state, {[action.tour.id]: action.tour} );
        case RECEIVE_TOURS:
            return Object.assign({}, state, action.tours);
        default:
            return state;
    }
};

export default toursReducer;
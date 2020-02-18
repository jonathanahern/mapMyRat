import {
    RECEIVE_TOUR
} from '../actions/tour_actions';

const toursReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_TOUR:
            return action.tour;
        default:
            return state;
    }
};

export default toursReducer;
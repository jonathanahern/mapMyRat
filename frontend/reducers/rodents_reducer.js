import {
    RECEIVE_RODENTS
} from '../actions/rodent_actions';

const rodentsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_RODENTS:
            return action.rodents;
        default:
            return state;
    }
};

export default rodentsReducer;
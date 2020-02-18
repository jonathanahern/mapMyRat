import * as APIUtil from '../util/rodent_api_util';

export const RECEIVE_RODENTS = 'RECEIVE_RODENTS';

export const receiveRodents = rodents => ({
    type: RECEIVE_RODENTS,
    rodents,
});

export const fetchRodents = () => dispatch => (
    APIUtil.fetchRodents().then(rodents => (
        dispatch(receiveRodents(rodents))
    ))
);

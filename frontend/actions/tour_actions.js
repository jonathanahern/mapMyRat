import * as APIUtil from "../util/tour_api_util";

export const RECEIVE_TOUR = "RECEIVE_TOUR";

export const receiveTour = tour => ({
    type: RECEIVE_TOUR,
    tour
});

export const createTour = tour => dispatch =>
    APIUtil.createTour(tour).then(
        tour => dispatch(receiveTour(tour))
    );

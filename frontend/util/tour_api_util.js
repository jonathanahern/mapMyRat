export const createTour = tour => {
    return $.ajax({
        url: "api/tours",
        method: "POST",
        data: { tour }
    });
};

export const fetchTours = () => {
    return $.ajax({
        url: "api/tours",
        method: "GET"
    });
};

export const createTour = tour => {
    return $.ajax({
        url: "api/tours",
        method: "POST",
        data: { tour }
    });
};


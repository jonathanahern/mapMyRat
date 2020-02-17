export const fetchRodents = () => (
    $.ajax({
        method: 'GET',
        url: 'api/rodents'
    })
);

export const createRodent = data => (
    $.ajax({
        method: 'POST',
        url: 'api/rodents',
        data: data,
    })
);
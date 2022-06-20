const API = 'http://localhost:3333';

// A help function to fetch data from our api 

export async function fetchFromAPI(endpointURL, opts) {
    const { method, body } = { method: 'POST', body:null, ...opts }

    const res = await fetch(`${API}/${endpointURL}`, {
        method,
        ...API(body && {body:JSON.stringify(body)}),
        headers: {
            'Content-Type':'application/json',
        }
    })
    return res.json();
}
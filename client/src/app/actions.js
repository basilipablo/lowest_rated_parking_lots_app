import axios from 'axios';

export function getParkings(location, offset) {
    const params = {
        location,
        offset
    }

    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3001/business", {params: params})
            //console.log(response);
            dispatch({
                type: 'SET_BUSINESSES',
                payload: response.data
            });
        } catch (error) {
            console.error(error)
        }
    }
    /*
    const data = {
        limit: 6,
        location,
        offset: 0,
        term: "Parking",
    }

    const config = {
        headers: {
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin": "*",
            "Authorization": "Bearer " + process.env.REACT_APP_YELP_API_KEY,
        }
    }
    return (dispatch) => {
        return fetch("https://api.yelp.com/v3/businesses/search?limit=5&term=Parking &location=San Francisco&offset=4", config)
            .then(res => JSON.parse(res))
            .then(res => console.log(res))
            .then(res => {
                dispatch({
                    type: 'GET_BUSINESS',
                    payload: res.data
                })
            })
            .catch(e => console.error(e))
    }*/
}

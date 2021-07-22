import axios from 'axios';

export function getParkings(location) {
    return (dispatch) => {
            return axios.get("http://localhost:3001/yelp")
                .then(res => console.log(res))
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

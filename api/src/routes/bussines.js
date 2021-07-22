const { Bussines } = require('../db');
const fetch = require("node-fetch");


exports.getBussines = async (req, res) => {
    try {
        const config = {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + process.env.YELP_API_KEY,
            }
        }
        const resp = await axios.get("https://api.yelp.com/v3/businesses/search?limit=5&term=Parking &location=San Francisco&offset=4", config)
        const respu = resp.data
        return res.send(respu);
    } catch (error) {
        return res.send(error)
    }
};
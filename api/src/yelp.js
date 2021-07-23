'use strict';
const axios = require('axios')
const {
    Router
} = require('express');
const router = Router();

router.get("/", async (req, res) => {
    try {
        const config = {
            headers: {
                "accept": "application/json",
                "x-requested-with": "xmlhttprequest",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${process.env.YELP_API_KEY}`,
            },
            params: {
                limit: 6,
                categories: 'parking',
                location: req.query.location,
                offset: req.query.offset,
                sort_by: 'rating',
            }
        }
        const resp = await axios.get("https://api.yelp.com/v3/businesses/search", config)
        const respu = resp.data
        return res.send(respu);
    } catch (error) {
        return res.send(error)
    }
});

module.exports = router;
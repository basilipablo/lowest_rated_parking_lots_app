const {
    Router
} = require('express');
const router = Router();

const yelp = require('./yelp');

router.use('/business', yelp)

module.exports = router;
const { Router } = require('express');

const { getBussines } = require('./bussines')

const router = Router();

//no need for cookies or bodyparse deprecated, its already done in app.js
router.get('/bussines', getBussines);

module.exports = router;

const express = require('express');

const fetchNumbers = require('../controller/fetchFibonacciNumbers');

const router = express.Router();

router.get('/numbers', fetchNumbers);

module.exports = router;

const express = require('express');

const fetchNumbers = require('../controller/fetchFibonacciNumbers');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
      message: `Welcome to the Fibonacci Numbers API`,
    })
  })

router.get('/numbers', fetchNumbers);

module.exports = router;

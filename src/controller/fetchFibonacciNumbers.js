const { JSDOM } = require('jsdom');
const fibonacci = require('../helpers/fibonacciNumbers');
const { window } = new JSDOM();

const fetchFibonacciNumbers = async (req, res) => {
  const start = window.performance.now();
  const fibonacciNumbers = fibonacci(10);
  const stop = window.performance.now();
  const timeDifference = stop - start;

  return res.status(200).json({
    status: 'Success',
    message: 'Fibonacci numbers fetched successfully',
    data: fibonacciNumbers,
    totalRunningTime: `${timeDifference} ms`
  })
};

module.exports = fetchFibonacciNumbers;



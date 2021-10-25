const { JSDOM } = require('jsdom');
const fibonacci = require('../helpers/fibonacciNumbers');
const { window } = new JSDOM();

/**
* Fetch fibonacci numbers as an array
*
* @param {Object} req
* @param {Object} res
* @returns {Object}
*/

const fetchFibonacciNumbers = async (req, res) => {
  try {
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
} catch (fibonacciError) {
  return res.status(500).json({
    status: 'Error',
    status_code: 500,
    message: 'Failed to fetch fibonacci numbers.',
  })

}
};

module.exports = fetchFibonacciNumbers;



const fibonacciNumbers = require('../../src/helpers/fibonacciNumbers');

describe('fibonacci numbers', () => {
  test('should return fibonacci numbers as an array when it takes an integer', async () => {
    const numbers = fibonacciNumbers(10);

    expect(numbers).not.toBe(null);
    expect(numbers).toHaveLength(7);
  })

  test('should return empty array if input number is less than or equals to 4', async () => {
    const numbers = fibonacciNumbers(3);

    expect(numbers).not.toBe(null);
    expect(numbers).toEqual([])
  })

  test('should add 1 to the array if input number is 5', async () => {
    const numbers = fibonacciNumbers(5);

    expect(numbers).not.toBe(null);
    expect(numbers).toContain(1)
  })
})

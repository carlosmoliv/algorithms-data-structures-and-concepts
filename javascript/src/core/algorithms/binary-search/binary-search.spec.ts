import { binarySearch } from './binary-search';

describe('Binary Search', () => {
  test('Return the index of the guessed number or undefined if not found', () => {
    const numbers = [1, 3, 5, 7, 9, 13, 19, 45, 78, 80, 85, 87, 90];

    const result1 = binarySearch(numbers, 3);
    const result2 = binarySearch(numbers, -1);
    const result3 = binarySearch(numbers, 5);
    const result4 = binarySearch(numbers, 85);

    expect(result1).toBe(1);
    expect(result2).toBe(undefined);
    expect(result3).toBe(2);
    expect(result4).toBe(10);
  });
});

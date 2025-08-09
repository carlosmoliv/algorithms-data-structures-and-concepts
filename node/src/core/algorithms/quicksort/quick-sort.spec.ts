import { quickSort } from './quick-sort';

describe('quickSort()', () => {
  it('sort with quick sort', async () => {
    const result1 = quickSort([10, 5, 2, 3]);
    const result2 = quickSort([3, 8, 12, 1, 5]);

    expect(result1).toEqual([2, 3, 5, 10]);
    expect(result2).toEqual([1, 3, 5, 8, 12]);
  });
});

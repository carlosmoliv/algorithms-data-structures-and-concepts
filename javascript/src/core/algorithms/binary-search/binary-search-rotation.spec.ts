function searchRotatedArray(numbers: number[], target: number) {
  if (numbers.length === 0) return -1;

  let n = numbers.length;
  let left = 0;
  let right = n - 1;

  // Finding the pivot
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let pivot = left;

  // Determining which part to search
  left = 0;
  right = n - 1;

  if (target >= numbers[pivot] && target <= numbers[right]) {
    left = pivot;
  } else {
    right = pivot - 1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

describe("Search in Rotated Sorted Array", () => {
  test("Find the target value and return its index.", () => {
    const numbers = [6, 7, 9, 15, 19, 2, 3];

    const result = searchRotatedArray(numbers, 15);

    expect(result).toBe(3);
  });

  test("If the target is not found, return -1.", () => {
    const numbers = [6, 7, 9, 15, 19, 2, 3];

    const result = searchRotatedArray(numbers, 2);

    expect(result).toBe(5);
  });

  test("If the target is not found, return -1.", () => {
    const numbers = [6, 7, 9, 15, 19, 2, 3];

    const result = searchRotatedArray(numbers, 4);

    expect(result).toBe(-1);
  });
});

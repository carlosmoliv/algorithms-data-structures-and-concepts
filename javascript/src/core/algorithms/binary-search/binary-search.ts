export const binarySearch = (
  list: number[],
  target: number
): number | undefined => {
  // Low and high keep track of which part of the list will be search in.
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    // Check the middle element each time
    const mid = Math.round(low + high / 2);
    const guess = list[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      // If the guess is too high, high is update accordingly
      high = mid - 1;
    } else {
      // If the guess is too low, low is update accordingly
      low = mid + 1;
    }
  }

  // When item doesn't exists
  return undefined;
};

// The following code computes the [integer] square root of a number.
// If the number is not a perfect square (there is no integer square root), then it returns -1.
// It does this by successive guessing.
// If n is 100, it first guesses 50. Too high? Try something lower - halfway between 1
// and 50. What is its runtime?
function sqrt(n: number): number {
  return sqrtHelper(n, 1, n);
}

function sqrtHelper(n: number, min: number, max: number): number {
  if (max < min) return -1; // no square root

  const guess = Math.floor((min + max) / 2);

  if (guess * guess === n) {
    // found it!
    return guess;
  } else if (guess * guess < n) {
    // too low
    return sqrtHelper(n, guess + 1, max); // try higher
  } else {
    // too high
    return sqrtHelper(n, min, guess - 1); // try lower
  }
}

// A: 0 (log n). This algorithm is essentially doing a binary search to find the square root.

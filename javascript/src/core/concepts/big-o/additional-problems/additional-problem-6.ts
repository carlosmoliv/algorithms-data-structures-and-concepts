// The following code computes the [integer] square root of a number. If the number is not
// a perfect square (there is no integer square root), then it returns -1. It does this by trying
// increasingly large numbers until it finds the right value (or is too high). What is its runtime?
function sqrt2(n: number): number {
  for (let guess = 1; guess * guess <= n; guess++) {
    if (guess * guess === n) {
      return guess;
    }
  }
  return -1;
}

// A: O(sqrt(n)).
// This is just a straightforward loop that stops when guess * guess > n (or, in other words, when guess > sqrt(n)).

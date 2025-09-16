function factorial(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Answer: O(n)

// Explanation: Nothing fancy here, just a recursion from n to n - 2 down to 1.

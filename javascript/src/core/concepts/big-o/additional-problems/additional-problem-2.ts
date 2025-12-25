// The following code computes a^b. What is its runtime?
function power(a: number, b: number): number {
  if (b < 0) {
    return 0;
  } else if (b == 0) {
    return 1;
  } else {
    return a * power(a, b - 1);
  }
}

// A: O(b). The recursive code iterates through b calls, since it subtracts one at each level.

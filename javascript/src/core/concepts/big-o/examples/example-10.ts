function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Answer: O(√n)

// Explanation: The loop runs from 2 to the square root of n,
// making the time complexity O(√n).

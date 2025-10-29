function allFib(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(`${i}:${fib(i)}`);
  }
}

function fib(n: number): number {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
allFib(5);

// Answer: O(2^n)

// It's not O(2^n) because `n` is changing.
// fib(n) is O(2^n) time but it matters what that value of `n` is

// Each call:
// fib(1) -> 2^1 steps
// fib(2) -> 2^2 steps
// fib(3) -> 2^3 steps
// fib(4) -> 2^4 steps

// So the total time is:
// 2^1 + 2^2 + 2^3 + 2^4 + ... + 2^n
// this is 2^n + 1, therefore the runtime to complete the first Fibonacci numbers is still O(2^n)

function allFib2(n: number): void {
  const memo: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    console.log(`${i}:${fib2(i, memo)}`);
  }
}

function fib2(n: number, memo: number[]): number {
  if (n < 2) {
    return n;
  } else if (memo[n] > 0) {
    return memo[n];
  }
  memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  return memo[n];
}

// Answer: O(n)

// fib2(1) -> returns 1
// fib2(2)
//      fib2(1) -> returns 1
//      fib2(0) -> returns 0
//      store 1 at memo[2]
// fib(3)
//      fib2(2) -> lookup memo[2] -> returns 1
//      fib2(1) -> returns 1
//      store 2 at memo[3]
// fib(4)
//      fib2(3) -> lookup memo[3] -> returns 2
//      fib2(2) -> lookup memo[2] -> returns 1
//      store 3 at memo[4]
// ...
// fib(n)
//      fib2(n-1) -> lookup memo[n-1]
//      fib2(n-2) -> lookup memo[n-2]
//      store fib(n) at memo[n]

// At each call to fib2(i), we have computed and stored the values for fib(i-1) and fib(i-2).
// We just look up those values, sum them, store the new result, and return. This takes a constant amount of time.
// We're doing a constant amount of work N times, so this is O (n) time.
// This technique, called memoization, is a very common one to optimize exponential time recursive algorithms.

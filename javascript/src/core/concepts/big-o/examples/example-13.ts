function fib(n: number): number {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// Answer: O(n^2)

// Explanation:
// O(branches^depth)
// There are 2 branches per call,and we go as deep as N, therefore the runtime is O(2^N)

// Notes:
// The time is indeed exponential, but it's actually closer to 0( 1.6^n). The reason that it's not exactly 0(2^n) is that, at
// the bottom of the call stack,there is sometimes only one call. It turns out that a lot of the nodes
// are at the bottom (as is true in most trees), so this single versus double call actually makes a big
// difference. Saying O(2^n) would suffice for the scope of an interview,though. You might get "bonus points" if
// you can recognize that it'll actually be less than that.

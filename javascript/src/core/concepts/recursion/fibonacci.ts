export const fibRecursive = (n: number): number => {
  // Base case
  if (n === 0 || n === 1) return n;

  // Recursive case
  return fibRecursive(n - 1) + fibRecursive(n - 2);
};

console.log('Fibonacci of 6 (recursive):', fibRecursive(6));

export const fibIterative = (n: number): number => {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp: number;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

console.log('Fibonacci of 6 (iterative):', fibIterative(6));

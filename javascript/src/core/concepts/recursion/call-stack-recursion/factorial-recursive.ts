export const factorialRecursive = (x: number): number => {
  // Base case
  if (x === 1) {
    return 1;
  } else {
    // Recursive case
    return x * factorialRecursive(x - 1);
  }
};

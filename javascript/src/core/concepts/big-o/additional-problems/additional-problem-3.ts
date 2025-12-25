// The following code computes a % b. What is its runtime?
function mod(a: number, b: number): number {
  if (b <= 0) {
    return -1;
  }
  const div = a / b;
  return a - div * b;
}

// A: 0(1). It does a constant amount of work.

// The following code performs integer division. What is its runtime (assume a and b are both positive)?
function div(a: number, b: number): number {
  let count = 0,
    sum = b;

  while (sum <= a) {
    sum += b;
    count++;
  }
  return count;
}
// A: 0(a / b). The variable count will eventually equal a / b.
// The while loop iterates count times.
// Therefore, it iterates a / b times.

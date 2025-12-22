// The following code computes the product of a and b. What is its runtime?
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum;
}

// A: O(b). The for loop just iterates through b.

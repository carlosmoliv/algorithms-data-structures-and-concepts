function foo(array: number[]) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  for (let j = 0; j < array.length; j++) {
    product *= array[j];
  }

  console.log(`${sum}, ${product}`);
}

// ANSWER: O(n)
// The function has two separate loops that each iterate through the input array.
// Each loop runs in linear time, O(n), where n is the length of the array.
// Since these loops are sequential and not nested, their time complexities add up,
// resulting in an overall time complexity of O(n) + O(n) = O(2n).
// In Big O notation, we drop the constant factor, so the final time complexity is O(n).

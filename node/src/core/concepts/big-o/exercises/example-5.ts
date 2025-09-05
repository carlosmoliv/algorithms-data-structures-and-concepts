function printUnorderedPairs(arrayA: number[], arrayB: number[]): void {
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      for (let k = 0; k < 1000000; k++) {
        // This inner loop runs a constant number of times (1,000,000) regardless of the input size.
        console.log(`${arrayA[i]}, ${arrayB[j]}`);
      }
    }
  }
}

// ANSWER: O(n * m)
// The function contains a nested loop structure where the outer loop iterates through the first input array (arrayA),
// and for each iteration of the outer loop, the middle loop iterates through the second input array (arrayB).
// If the first input array has n elements and the second input array has m elements, the outer loop runs n times,
// and for each iteration of the outer loop, the middle loop runs m times. This results in a total of n * m iterations.
// The innermost loop runs a constant number of times (1,000,000) regardless of the input size, which does not affect
// the overall time complexity in terms of Big O notation.
// Therefore, the time complexity of this function is O(n * m).

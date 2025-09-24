function printUnorderedPairs(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }
}

// ANSWER: O(n^2)
// The function contains a nested loop where the outer loop iterates through the input array.
// For each iteration of the outer loop, the inner loop starts at the next index (i + 1)
// and iterates through the remaining elements.
//
// Across all iterations, the total number of inner loop executions is:
// (n-1) + (n-2) + ... + 1 + 0 = n(n-1)/2 ≈ n²/2.
// This is the same as saying that, on average across all outer loop iterations,
// the inner loop runs about n/2 times, not that it always runs n/2 times for each i.
//
// Multiplying by the n outer iterations gives roughly n * (n/2) = n²/2,
// and Big-O notation ignores constants, so the overall time complexity is O(n²).

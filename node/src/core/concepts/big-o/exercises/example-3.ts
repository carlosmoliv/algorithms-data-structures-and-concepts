function printUnorderedPairs(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`${arr[i]}, ${arr[j]}`);
    }
  }
}

// ANSWER: O(n^2)
// The function contains a nested loop structure where the outer loop iterates through the input array,
// and for each iteration of the outer loop, the inner loop iterates through the remaining elements of the array.
// If the input array has n elements, the outer loop runs n times, and for each iteration of the outer loop,
// the inner loop runs approximately n/2 times on average. This results in a total of n * (n/2) = n^2/2 iterations.
// Therefore, the time complexity of this function is O(n^2).

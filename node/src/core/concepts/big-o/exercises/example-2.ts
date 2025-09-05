function printPairs(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`);
    }
  }
}

// ANSWER: O(n^2)
// The function contains a nested loop structure where the outer loop iterates through the input array,
// and for each iteration of the outer loop, the inner loop also iterates through the entire array.
// If the input array has n elements, the outer loop runs n times, and for each iteration of the outer loop,
// the inner loop also runs n times. This results in a total of n * n = n^2 iterations.
// Therefore, the time complexity of this function is O(n^2), which is quadratic time complexity.

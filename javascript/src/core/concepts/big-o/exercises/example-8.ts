// Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array. What would the runtime be?

// Answer: O(n log n * m log m) where n is the number of strings and m is the length of the longest string.
// Sorting each string takes O(m log m) time, and sorting the array of strings takes O(n log n) time.
// Since we have to sort each string before sorting the array, we multiply these two complexities together.

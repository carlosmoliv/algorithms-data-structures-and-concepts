function reverse(arr: number[]): void {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const other = arr.length - 1 - i;
    const temp = arr[i];
    arr[i] = arr[other];
    arr[other] = temp;
  }
}

// ANSWER: O(n)
// The function contains a single loop that iterates through half of the input array (arr).
// If the input array has n elements, the loop runs approximately n/2 times.
// In Big O notation, constant factors are ignored, so n/2 simplifies to O(n).
// Therefore, the time complexity of this function is O(n).

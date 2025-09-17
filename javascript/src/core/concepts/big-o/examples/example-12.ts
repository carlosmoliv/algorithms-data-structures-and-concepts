function permutation(str: string, prefix: string = ''): void {
  if (str.length === 0) {
    console.log(prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      const rem = str.slice(0, i) + str.slice(i + 1);
      permutation(rem, prefix + str[i]);
    }
  }
}

permutation('abc');

// Answer: O(n^2 * n!)

// Explanation: Every possible ordering of the characters must be visited, and there are n! of them.
// Producing or printing each ordering itself costs O(n).
// Therefore, O(n * n!)

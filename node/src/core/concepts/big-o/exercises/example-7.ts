// Which of the following are equivalent to O(n)? Why?

// A) O(n + p), where p < n/2
// B) O(2n)
// C) O(n + log n)
// D) O(n + m)

// ANSWER: A, B, and C are equivalent to O(n).
// Explanation:
// A) O(n + p), where p < n/2: Since p is less than n/2, it is a constant factor relative to n. Therefore, O(n + p) simplifies to O(n).
// B) O(2n): In Big O notation, constant factors are ignored. Thus, O(2n) simplifies to O(n).
// C) O(n + log n): As n grows larger, the log n term becomes insignificant compared to the linear n term. Therefore, O(n + log n) simplifies to O(n).
// D) O(n + m): This expression cannot be simplified to O(n) unless there is a known relationship between n and m (e.g., if m is always less than or equal to n). Without such a relationship, we cannot conclude that O(n + m) is equivalent to O(n).

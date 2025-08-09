// Without defining the base case, we have a infinite loop:
const countdown1 = (i: number) => {
  console.log(i);
  countdown1(i - 1);
};

// Fixed version defining the base case:
const countdown2 = (i: number) => {
  console.log(i);
  // Base case
  if (i <= 0) {
    return;
  } else {
    // Recursive case
    countdown2(i - 1);
  }
};

countdown2(10);

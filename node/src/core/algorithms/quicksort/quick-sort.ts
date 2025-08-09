export const quickSort = (list: number[]): number[] => {
  // Base case: arrays with 0 or 1 element are already “sorted.”
  if (list.length < 2) {
    return list;
  } else {
    // Recursive case
    const pivot = list[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < list.length; i++) {
      if (list[i] <= pivot) {
        // Sub array of elements less than the pivot
        less.push(list[i]);
      } else {
        // Sub array of elements greater than the pivot
        greater.push(list[i]);
      }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

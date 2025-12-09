// Basic implementation
export const quickSort = (list: number[]): number[] => {
  if (list.length < 2) {
    return list;
  } else {
    const pivot = list[0];
    const less = [];
    const greater = [];
    for (let i = 1; i < list.length; i++) {
      if (list[i] <= pivot) {
        less.push(list[i]);
      } else {
        greater.push(list[i]);
      }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

// export function quickSort(list: number[], left = 0, right = list.length - 1): number[] {
//   if (left >= right) return list;

//   const pivotIndex = partition(list, left, right);

//   quickSort(list, left, pivotIndex - 1);
//   quickSort(list, pivotIndex + 1, right);

//   return list;
// }

// function partition(list: number[], left: number, right: number): number {
//   // random pivot
//   const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
//   const pivotValue = list[pivotIndex];

//   [list[pivotIndex], list[right]] = [list[right], list[pivotIndex]];

//   let storeIndex = left;

//   for (let i = left; i < right; i++) {
//     if (list[i] < pivotValue) {
//       [list[i], list[storeIndex]] = [list[storeIndex], list[i]];
//       storeIndex++;
//     }
//   }

//   [list[storeIndex], list[right]] = [list[right], list[storeIndex]];

//   return storeIndex;
// }

// Optimized implementation with in-place partitioning
export const quickSortInPlace = (
  arr: number[],
  low = 0,
  high = arr.length - 1
): number[] => {
  if (low < high) {
    const pi = partition(arr, low, high);
    quickSortInPlace(arr, low, pi - 1);
    quickSortInPlace(arr, pi + 1, high);
  }
  return arr;
};

const partition = (arr: number[], low: number, high: number): number => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

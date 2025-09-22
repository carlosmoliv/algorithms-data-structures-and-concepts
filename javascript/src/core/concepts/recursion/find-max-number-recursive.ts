export const findMaxNumberRecursive = (list: number[]): number => {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  const subMax = findMaxNumberRecursive(list.slice(1));
  return list[0] > subMax ? list[0] : subMax;
};

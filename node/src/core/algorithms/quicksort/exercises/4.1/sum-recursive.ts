export const sumRecursive = (list: number[]): number => {
  if (list.length === 0) return 0;
  return list[0] + sumRecursive(list.slice(1));
};

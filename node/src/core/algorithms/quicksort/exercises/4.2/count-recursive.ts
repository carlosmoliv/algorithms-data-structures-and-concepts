export const countRecursive = (list: number[]): number => {
  if (list.length === 0) return 0;
  return 1 + countRecursive(list.slice(1));
};

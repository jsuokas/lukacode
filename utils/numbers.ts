export const calculateAverage = (arr: number[]) =>
  arr.reduce((current, next) => current + next, 0) / arr.length;

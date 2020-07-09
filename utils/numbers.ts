export const calculateAverage = (arr: number[]) =>
  arr && arr.length > 0
    ? arr.reduce((current, next) => current + next, 0) / arr.length
    : 0;

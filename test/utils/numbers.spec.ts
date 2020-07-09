import { calculateAverage } from "../../utils/numbers";

describe("calculateAverage", () => {
  it("should calculate average correctly", () => {
    expect(calculateAverage(undefined)).toEqual(0);
    expect(calculateAverage(null)).toEqual(0);
    expect(calculateAverage([])).toEqual(0);
    expect(calculateAverage([5, 5])).toEqual(5);
    expect(calculateAverage([-5, 50, 0, -100, 60])).toEqual(1);
  });
});

import { findMaxNumberRecursive } from "./find-max-number-recursive";

describe("findMaxNumber", () => {
  it("", async () => {
    const result = findMaxNumberRecursive([3, 49, 9, 14]);

    expect(result).toBe(49);
  });
});

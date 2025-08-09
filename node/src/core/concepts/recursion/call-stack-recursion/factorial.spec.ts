import { factorialRecursive } from "./factorial-recursive";

describe("factorial", () => {
  it("Return the factorial result", async () => {
    const result = factorialRecursive(5);

    expect(result).toBe(120);
  });
});

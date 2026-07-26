import { describe, expect, it } from "vitest";

import { add } from "@utils/index";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

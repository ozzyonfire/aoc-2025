import { expect, test } from "bun:test";
import { solveForMaxJoltagePart1 } from "../day3";

test("should solve for max voltage", () => {
  expect(solveForMaxJoltagePart1(`987654321111111`)).toBe(98);
  expect(solveForMaxJoltagePart1(`811111111111119`)).toBe(89);
  expect(solveForMaxJoltagePart1(`234234234234278`)).toBe(78);
  expect(solveForMaxJoltagePart1(`818181911112111`)).toBe(92);
});

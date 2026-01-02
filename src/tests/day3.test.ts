import { expect, test } from "bun:test";
import { solveForMaxJoltagePart1, solveForMaxJoltagePart2 } from "../day3";

test("should solve for max voltage", () => {
  expect(solveForMaxJoltagePart1(`987654321111111`)).toBe(98);
  expect(solveForMaxJoltagePart1(`811111111111119`)).toBe(89);
  expect(solveForMaxJoltagePart1(`234234234234278`)).toBe(78);
  expect(solveForMaxJoltagePart1(`818181911112111`)).toBe(92);
});

test("should solve for max joltage part 2", () => {
  expect(solveForMaxJoltagePart2(`987654321111111`, 12)).toBe(987654321111);
  expect(solveForMaxJoltagePart2(`811111111111119`, 12)).toBe(811111111119);
  expect(solveForMaxJoltagePart2(`234234234234278`, 12)).toBe(434234234278);
  expect(solveForMaxJoltagePart2(`818181911112111`, 12)).toBe(888911112111);
});

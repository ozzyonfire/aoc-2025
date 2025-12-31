import { expect, test } from "bun:test";
import { detectInvalidIdPart1, detectInvalidIdPart2 } from "../day2";

test("should detect invalid id", () => {
  expect(detectInvalidIdPart1(123456)).toBe(false);
  expect(detectInvalidIdPart1(123123)).toBe(true);
  expect(detectInvalidIdPart1(121212)).toBe(false);
  expect(detectInvalidIdPart1(11)).toBe(true);
  expect(detectInvalidIdPart1(22)).toBe(true);
  expect(detectInvalidIdPart1(222222)).toBe(true);
  expect(detectInvalidIdPart1(1010)).toBe(true);
  expect(detectInvalidIdPart1(38593859)).toBe(true);
});

test("should detect invalid id part 2", () => {
  expect(detectInvalidIdPart2(123456)).toBe(false);
  expect(detectInvalidIdPart2(123123)).toBe(true);
  expect(detectInvalidIdPart2(121212)).toBe(true);
  expect(detectInvalidIdPart2(11)).toBe(true);
  expect(detectInvalidIdPart2(22)).toBe(true);
  expect(detectInvalidIdPart2(222222)).toBe(true);
  expect(detectInvalidIdPart2(1010)).toBe(true);
  expect(detectInvalidIdPart2(38593859)).toBe(true);
  expect(detectInvalidIdPart2(1111111)).toBe(true);
  expect(detectInvalidIdPart2(999)).toBe(true);
  expect(detectInvalidIdPart2(145145145)).toBe(true);
});

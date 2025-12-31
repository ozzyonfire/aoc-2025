import { expect, test } from "bun:test";
import { Safe, solve } from "../day1";

test("should return the correct number of points at zero", () => {
  const safe = new Safe();
  expect(safe.moveLeft(100)).toBe(1);
});

test("should move left correctly", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveLeft(50);
  expect(pointsAtZero).toBe(0);
  expect(safe.getCurrentPosition()).toBe(0);
});

test("should move right correctly", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveRight(50);
  expect(pointsAtZero).toBe(0);
  expect(safe.getCurrentPosition()).toBe(0);
});

test("should move past zero moving left", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveLeft(150);
  expect(pointsAtZero).toBe(1);
  expect(safe.getCurrentPosition()).toBe(0);
});

test("should move past zero moving right", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveRight(150);
  expect(pointsAtZero).toBe(1);
  expect(safe.getCurrentPosition()).toBe(0);
});

test("should move past zero and not land on zero", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveRight(151);
  expect(pointsAtZero).toBe(2);
  expect(safe.getCurrentPosition()).toBe(1);
});

test("should move past zero and not land on zero moving left", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveLeft(151);
  expect(pointsAtZero).toBe(2);
  expect(safe.getCurrentPosition()).toBe(99);
});

test("should calculate the password correctly", () => {
  const example = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

  const lines = example.split("\n");
  const safe = new Safe();
  const password = solve(lines, safe);
  expect(password).toBe(6);
});

test("should calcualte the password correctly with moves", () => {
  const safe = new Safe();
  const pointsAtZero = safe.moveLeft(49);
  expect(pointsAtZero).toBe(0);
  expect(safe.getCurrentPosition()).toBe(1);
  const pointsAtZero2 = safe.moveLeft(1);
  expect(pointsAtZero2).toBe(0);
  expect(safe.getCurrentPosition()).toBe(0);
  const pointsAtZero3 = safe.moveLeft(200);
  expect(pointsAtZero3).toBe(1);
  expect(safe.getCurrentPosition()).toBe(0);
  let points = 0;
  points = safe.moveLeft(400);
  expect(points).toBe(3);
  expect(safe.getCurrentPosition()).toBe(0);
  points = safe.moveRight(400);
  expect(points).toBe(3);
  expect(safe.getCurrentPosition()).toBe(0);
  points = safe.moveRight(50);
  expect(points).toBe(0);
  expect(safe.getCurrentPosition()).toBe(50);
  points = safe.moveRight(50);
  expect(points).toBe(0);
  expect(safe.getCurrentPosition()).toBe(0);
  expect(safe.moveRight(100)).toBe(0);
  expect(safe.getCurrentPosition()).toBe(0);
  expect(safe.moveRight(101)).toBe(1);
  expect(safe.getCurrentPosition()).toBe(1);
});

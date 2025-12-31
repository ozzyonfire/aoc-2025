export function detectInvalidIdPart1(num: number) {
  const numString = num.toString();
  if (numString.length % 2 !== 0) {
    return false;
  }
  const firstHalf = numString.slice(0, numString.length / 2);
  const secondHalf = numString.slice(numString.length / 2);
  if (firstHalf === secondHalf) {
    return true;
  }
  return false;
}

export function detectInvalidIdPart2(num: number) {
  const numString = num.toString();
  const maxLength = Math.floor(numString.length / 2);
  for (let i = 1; i <= maxLength; i++) {
    if (numString.length % i !== 0) {
      continue;
    }
    const subString = numString.slice(0, i);
    const repeatedSubstring = subString.repeat(numString.length / i);
    if (repeatedSubstring === numString) {
      return true;
    }
  }
  return false;
}

import input from "./inputs/Day 2 Advent of Code 2025.txt";

const ranges = input.split(",");

function solve(ranges: string[]) {
  let invalidIds = [];
  for (const range of ranges) {
    const [start, end] = range.split("-").map((id) => parseInt(id));
    if (!start || !end) {
      continue;
    }
    for (let i = start; i <= end; i++) {
      if (detectInvalidIdPart2(i)) {
        console.log("Invalid id: ", i);
        invalidIds.push(i);
      }
    }
  }
  return invalidIds;
}

const invalidIds = solve(ranges);
console.log(invalidIds.length);
console.log(invalidIds.reduce((acc, id) => acc + id, 0));

export function solveForMaxJoltagePart1(bank: string) {
  let firstDigit: number = 0;
  let currentMaxJoltage: number = 0;

  for (let i = 0; i < bank.length - 1; i++) {
    const digit = parseInt(bank[i] ?? "0");
    if (digit > firstDigit) {
      firstDigit = digit;
      for (let j = i + 1; j < bank.length; j++) {
        const digit2 = parseInt(bank[j] ?? "0");
        const tempJoltage = parseInt(`${digit}${digit2}`);
        if (tempJoltage > currentMaxJoltage) {
          currentMaxJoltage = tempJoltage;
        }
      }
    }
  }
  return currentMaxJoltage;
}

import input from "./inputs/Day 3 Advent of Code 2025.txt";

const banks = input.split("\n");

const maxJoltages = banks.map(solveForMaxJoltagePart1);
console.log(maxJoltages.reduce((acc, curr) => acc + curr, 0));

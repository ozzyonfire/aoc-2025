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

export function getMaxJoltageIndex(subBank: string) {
  let maxDigit: number = 0;
  let maxIndex: number = 0;
  for (let i = 0; i < subBank.length; i++) {
    const digit = parseInt(subBank[i] ?? "0");
    if (digit > maxDigit) {
      maxDigit = digit;
      maxIndex = i;
    }
  }
  return maxIndex;
}

export function solveForMaxJoltagePart2(bank: string, digitsRemaining: number) {
  let bankCopy = bank;
  let joltage = "";
  console.log("bank: ", bank);
  for (let i = digitsRemaining; i > 0; i--) {
    let subBank = bankCopy.slice(0, bankCopy.length + 1 - i);
    console.log("bankCopy: ", bankCopy);
    // console.log("digitsRemaining: ", i);
    // console.log("subBank: ", subBank);
    let index = getMaxJoltageIndex(subBank);
    // console.log("index: ", index);
    joltage += bankCopy[index ?? "0"];
    bankCopy = bankCopy.slice(index + 1);
  }
  return parseInt(joltage);
}

import input from "./inputs/Day 3 Advent of Code 2025.txt";

const banks = input.split("\n").filter((bank) => bank.length > 0);

const maxJoltages = banks.map((bank) => solveForMaxJoltagePart2(bank, 12));
console.log(maxJoltages.reduce((acc, curr) => acc + curr, 0));

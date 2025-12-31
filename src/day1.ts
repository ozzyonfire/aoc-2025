export class Safe {
  private currentPosition: number = 50;

  moveLeft(steps: number) {
    console.log("moving left by ", steps);
    let numberOfTimesPassedZero = 0;
    // number of steps left to reach 0
    const stepsLeftToReachZero = this.currentPosition;
    const remainingSteps = steps - stepsLeftToReachZero;
    const newPosition = this.currentPosition - steps;
    if (remainingSteps > 0) {
      if (this.currentPosition !== 0) {
        numberOfTimesPassedZero++;
      }
      numberOfTimesPassedZero += Math.floor(remainingSteps / 100);
    }
    this.currentPosition = newPosition;
    this.currentPosition = this.resolvePosition();
    if (this.currentPosition === 0 && numberOfTimesPassedZero > 0) {
      numberOfTimesPassedZero--;
    }
    return numberOfTimesPassedZero;
  }

  moveRight(steps: number) {
    console.log("moving right by ", steps);
    let numberOfTimesPassedZero = 0;
    // number of steps left to reach 0
    const stepsLeftToReachZero = 100 - this.currentPosition;
    const remainingSteps = steps - stepsLeftToReachZero;
    if (remainingSteps > 0) {
      numberOfTimesPassedZero += Math.floor(remainingSteps / 100) + 1;
    }
    this.currentPosition = this.currentPosition + steps;
    this.currentPosition = this.resolvePosition();
    if (this.currentPosition === 0 && numberOfTimesPassedZero > 0) {
      numberOfTimesPassedZero--;
    }
    return numberOfTimesPassedZero;
  }

  resolvePosition() {
    let newPosition = this.currentPosition;
    if (newPosition < 0) {
      newPosition = 100 + (this.currentPosition % 100);
    } else {
      newPosition = newPosition % 100;
    }
    if (newPosition === 100) {
      newPosition = 0;
    }
    return newPosition;
  }

  getCurrentPosition() {
    return this.currentPosition;
  }
}

const input = Bun.file("src/input.txt");
const text = await input.text();
let lines = text.split("\n");

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

const example2 = `R150`;

// lines = example.split("\n");

export function solve(lines: string[], safe: Safe) {
  let numberOfZeroes = 0;
  let totalPointsAtZero = 0;
  for (const line of lines) {
    const direction = line[0];
    const steps = parseInt(line.slice(1));
    console.log("The dial is at ", safe.getCurrentPosition());
    if (direction === "L") {
      const pointsAtZero = safe.moveLeft(steps);
      if (pointsAtZero > 0) {
        totalPointsAtZero += pointsAtZero;
        console.log("Points at zero ", pointsAtZero);
      }
    } else {
      const pointsAtZero = safe.moveRight(steps);
      if (pointsAtZero > 0) {
        totalPointsAtZero += pointsAtZero;
        console.log("Points at zero ", pointsAtZero);
      }
    }
    if (safe.getCurrentPosition() === 0) {
      numberOfZeroes++;
    }
    console.log("Total points at zero: ", totalPointsAtZero);
    console.log("Total zeroes: ", numberOfZeroes);
  }

  console.log("number of zeroes: ", numberOfZeroes + totalPointsAtZero);
  return numberOfZeroes + totalPointsAtZero;
}

const safe = new Safe();
const password = solve(lines, safe);
console.log("Password: ", password);

import run from "aocrunner";
import { modulo } from "../utils/index.js";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => ({
    direction: line[0] as "L" | "R",
    amount: parseInt(line.slice(1)),
  }));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  console.log(input);

  let position = 50;
  let zeroCount = 0;

  for (const rotation of input) {
    const mult = rotation.direction === "L" ? -1 : 1;
    position = modulo(position + mult * rotation.amount, 100);
    if (position === 0) zeroCount++;
  }

  return zeroCount.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let position = 50;
  let zeroCount = 0;

  for (const rotation of input) {
    const mult = rotation.direction === "L" ? -1 : 1;
    for (let i = 0; i < rotation.amount; i++) {
      position = modulo(position + mult * 1, 100);
      if (position === 0) zeroCount++;
    }
  }

  return zeroCount.toString();
};

run({
  part1: {
    tests: [
      {
        input: `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`,
        expected: "3",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`,
        expected: "6",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

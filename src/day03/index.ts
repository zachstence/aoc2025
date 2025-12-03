import run from "aocrunner";
import { findMax } from "../utils/index.js";

const parseInput = (rawInput: string) =>
  rawInput
    .split("\n")
    .map((bank) => bank.split("").map((battery) => parseInt(battery)));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;

  for (const bank of input) {
    const { max: first, index } = findMax(bank.slice(0, bank.length - 1));
    const { max: second } = findMax(bank.slice(index + 1));
    const value = parseInt(`${first}${second}`);
    sum += value;
  }

  return sum.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `
987654321111111
811111111111119
234234234234278
818181911112111
`,
        expected: "357",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

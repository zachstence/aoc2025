import run from "aocrunner";

const parseInput = (rawInput: string) =>
  rawInput
    .split(",")
    .map((rangeStr) => rangeStr.split("-").map((num) => parseInt(num)));

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let sum = 0;

  for (const range of input) {
    for (let id = range[0]; id <= range[1]; id++) {
      if (isInvalidId(id)) {
        sum += id;
      }
    }
  }

  return sum.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  return;
};

const isInvalidId = (id: number): boolean => {
  const str = id.toString();
  if (str.length % 2 !== 0) return false;
  const mid = str.length / 2;
  return str.slice(0, mid) === str.slice(mid);
};

run({
  part1: {
    tests: [
      {
        input: `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`,
        expected: "1227775554",
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

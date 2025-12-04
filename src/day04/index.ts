import run from "aocrunner";
import cloneDeep from "lodash/cloneDeep.js";

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split(""));

type Coord = {
  x: number;
  y: number;
};

const getNeighbors = <T>(grid: T[][], { x, y }: Coord): T[] => {
  const height = grid.length;
  const width = grid[0]?.length ?? 0;
  const neighborCoords: Coord[] = [
    { x: x - 1, y: y - 1 },
    { x, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y },
    { x: x + 1, y },
    { x: x - 1, y: y + 1 },
    { x, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ];
  const neighborValues = neighborCoords
    .filter(({ x, y }) => x >= 0 && x < width && y >= 0 && y < height)
    .map(({ x, y }) => grid[y][x]);
  return neighborValues;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let count = 0;
  for (let y = 0; y < input.length; y++) {
    const line = input[y];
    for (let x = 0; x < line.length; x++) {
      const cell = line[x];
      if (cell !== "@") continue;
      const neighbors = getNeighbors(input, { x, y });
      const numOccupiedNeighbors = neighbors.filter((n) => n === "@").length;
      if (numOccupiedNeighbors < 4) count++;
    }
  }

  return count.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);

  let count = 0;
  let removed = 0;
  do {
    const grid = cloneDeep(input);
    removed = 0;
    for (let y = 0; y < grid.length; y++) {
      const line = grid[y];
      for (let x = 0; x < line.length; x++) {
        const cell = line[x];
        if (cell !== "@") continue;
        const neighbors = getNeighbors(grid, { x, y });
        const numOccupiedNeighbors = neighbors.filter((n) => n === "@").length;
        if (numOccupiedNeighbors < 4) {
          input[y][x] = "x";
          removed++;
          count++;
        }
      }
    }
  } while (removed > 0);

  return count.toString();
};

run({
  part1: {
    tests: [
      {
        input: `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`,
        expected: "13",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`,
        expected: "43",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});

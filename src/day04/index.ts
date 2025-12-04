import run from "aocrunner";

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

  return;
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

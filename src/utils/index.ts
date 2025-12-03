/**
 * Root for your util libraries.
 *
 * You can import them in the src/template/index.ts,
 * or in the specific file.
 *
 * Note that this repo uses ES Modules, so you have to explicitly specify
 * .js extension (yes, .js not .ts - even for TypeScript files)
 * for imports that are not imported from node_modules.
 *
 * For example:
 *
 *   correct:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.js'
 *     import { myUtil } from '../utils/index.js'
 *
 *   incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib.ts'
 *     import { myUtil } from '../utils/index.ts'
 *
 *   also incorrect:
 *
 *     import _ from 'lodash'
 *     import myLib from '../utils/myLib'
 *     import { myUtil } from '../utils'
 *
 */

export const modulo = (num: number, base: number): number =>
  ((num % base) + base) % base;

export const getDivisors = (num: number): number[] => {
  const divisors: number[] = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      divisors.push(num / i);
    }
  }
  return divisors.sort();
};

export const findMax = (arr: number[]): { max: number; index: number } => {
  return arr.reduce<{ max: number; index: number }>(
    (acc, battery, i) => {
      if (battery > acc.max) {
        acc.max = battery;
        acc.index = i;
      }
      return acc;
    },
    { max: -Infinity, index: -1 },
  );
};

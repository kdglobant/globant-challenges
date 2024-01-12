const insertInterval = (
  intervals: number[][],
  newInterval: number[]
): number[][] => {
  const result: number[][] = [];
  let i: number = 0;
  const n: number = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  result.push(newInterval);

  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

// Example 1
const intervals1: number[][] = [
  [1, 3],
  [6, 9],
];
const newInterval1: number[] = [2, 5];
const output1: number[][] = insertInterval(intervals1, newInterval1);
console.log(output1);

// Example 2
const intervals2: number[][] = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval2: number[] = [4, 9];
const output2: number[][] = insertInterval(intervals2, newInterval2);
console.log(output2);

// Example 3
const intervals3: number[][] = [
  [1, 3],
  [6, 9],
  [12, 16],
];
const newInterval3: number[] = [2, 5];
const output3: number[][] = insertInterval(intervals3, newInterval3);
console.log(output3);
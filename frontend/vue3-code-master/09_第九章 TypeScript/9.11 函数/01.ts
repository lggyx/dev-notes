// function sum(x: number, y: number): number {
//   return x + y;
// }

// let mySum = function(x: number, y: number): number {
//   return x + y;
// };
let mySum2: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };

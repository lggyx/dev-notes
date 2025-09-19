function createArray2 <T> (value: T, count: number): T[] {
  const arr: Array<T> = [];
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}

const arr3 = createArray2(11.12, 3);
const arr4 = createArray2('abcd', 3);
console.log(arr3, arr4);

// 正确语法有补全提示
console.log(arr3[0].toFixed(1), arr4[0].split(''));
// 错误语法有错误提示
console.log(arr4[0].toFixed2(1), arr4[0].split2(''));

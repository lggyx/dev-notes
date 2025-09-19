/* 
需求：函数需要根据指定的数量count和数据value，创建一个包含count个value的数组。
*/
function createArray(value: any, count: number): any[] {
  const arr: any[] = [];
  for (let index = 0; index < count; index++) {
    arr.push(value);
  }
  return arr;
}

const arr1 = createArray(11.12, 3);
const arr2 = createArray('abcd', 3);
console.log(arr1, arr2);

// 正确语法没有补全提示
console.log(arr1[0].toFixed(1), arr2[0].split(''));
// 错误语法没有错误提示
console.log(arr1[0].toFixed2(1), arr2[0].split2(''));

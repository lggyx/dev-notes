// function getLength(myName: string | number): number {
//   return myName.length;
// }

// 类型“string | number”上不存在属性“length”。
//  类型“number”上不存在属性“length”。

function getString(myName: string | number): string {
  return myName.toString();
}
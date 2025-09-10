// 没有泛型约束
// function fn <T>(x: T): void {
//   console.log(x.length);  // error
// }

interface Lengthable {
  length: number;
}

// 指定泛型约束
function fn2 <T extends Lengthable>(x: T): void {
  console.log(x.length);
}
fn2('abc');
// fn2(123); // error  number没有length属性
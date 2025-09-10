/* 1. ECMAScript 的内置对象 */
(() => {
  let b: Boolean = new Boolean(1);
  let n: Number = new Number(true);
  let s: String = new String('abc');
  let d: Date = new Date();
  let r: RegExp = /^1/;
  let e: Error = new Error('error message');
  b = true;
  // let bb: boolean = new Boolean(2)  // error
})();

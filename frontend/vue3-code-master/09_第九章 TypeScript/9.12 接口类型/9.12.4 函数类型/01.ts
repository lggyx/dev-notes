/* 
接口可以描述函数类型(参数的类型与返回的类型)
*/

interface SearchFn {
  (x: string, y: string): boolean;
}

const mySearch: SearchFn = function (a: string, b: string): boolean {
  return a.includes(b);
};

console.log(mySearch('abcd', 'bc'));

/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
/*
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
// 正确实现: 类型断言
(() => {
  function getLength(x: number | string) {
    if ((<string>x).length) {
      return (x as string).length;
    } else {
      return x.toString().length;
    }
  }
  console.log(getLength('atguigu'), getLength(2015));
})();
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
// 错误实现
function getLength(x: number | string) {
  // return x.length // error number类型没有length
  if (x.length) { // error number类型没有length
    return x.length;
  } else {
    return x.toString().length;
  }
}
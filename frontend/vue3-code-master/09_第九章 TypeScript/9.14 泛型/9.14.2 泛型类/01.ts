// 定义类, 指定泛型类型
class GenericData<T> {
  // 类体中使用泛型类型
  initValue: T;
  add: (x: T, y: T) => T;
}

// 创建实例时指定泛型具体类型
const gNumber = new GenericData<number>();
gNumber.initValue = 4;
gNumber.add = function (a, b) {
  return a + b;
};
console.log(gNumber.add(gNumber.initValue, 5));

const gString = new GenericData<string>();
gString.initValue = 'abc';
gString.add = function (a, b) {
  return a + b;
};
console.log(gString.add(gString.initValue, 'cba'));

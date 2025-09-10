/* 
类的基本定义与使用
*/

class Person {
  // 声明属性(必须写)
  name: string;
  age: number;

  // 构造方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 一般方法
  sayInfo(): void {
    console.log(`我叫${this.name}, 今年${this.age}`);
  }
}
// 创建类的实例
const p = new Person('tom', 12);
// 调用实例的方法
p.sayInfo();

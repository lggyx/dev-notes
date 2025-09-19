(() => {
  // 1. 值类型别名
  type Status = 1 | 2 | 3; // Status来代表1/2/3的可选值别名

  // 不使用值类型别名
  let status: 1 | 2 | 3 = 2;
  // status = 4; // error

  // 使用值类型别名
  let status2: Status = 3;
  // status = 5;  // error

  // 2. 类型别名
  type Key = string | number;
  let a: Key = 'abc';
  a = 123;

  interface Person {
    username: string;
    age: number;
  }
  type Persons = Person[]; // 用Persons代表Person[]

  // 不使用类型别名
  let persons: Person[] = [
    { username: 'tom', age: 12 },
    { username: 'jack', age: 13 },
  ];
  // 使用类型别名
  let persons2: Persons = [
    { username: 'tom', age: 12 },
    { username: 'jack', age: 13 },
  ];
})();

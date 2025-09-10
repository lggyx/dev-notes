// 要求a的类型与person的一致
let a: typeof person = {
  name: 'jack',
  age: 23
}

// 要求b的类型与fn的类型一致
let b: typeof fn = (val: number): string => {
  return val.toString();
}

// 要求b的类型与person对象的name属性一致
let c: typeof person.name = 'abc';
// c = 123; // error



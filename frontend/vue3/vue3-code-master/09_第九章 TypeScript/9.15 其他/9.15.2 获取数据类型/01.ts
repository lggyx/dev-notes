const person = {
  name: 'tom',
  age: 12,
};
function fn(x: number): string {
  return x + 'abc';
}

// js的typeof
console.log(typeof person); // 'object'
console.log(typeof fn); // 'function'
console.log(typeof person.name); // 'string'

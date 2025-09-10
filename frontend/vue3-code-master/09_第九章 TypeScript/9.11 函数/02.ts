function concatdName(firstName: string='A', lastName?: string): string {
  if (lastName) {
    return firstName + '-' + lastName;
  } else {
    return firstName;
  }
}

console.log(concatdName('C', 'D'));
console.log(concatdName('C'));
console.log(concatdName());
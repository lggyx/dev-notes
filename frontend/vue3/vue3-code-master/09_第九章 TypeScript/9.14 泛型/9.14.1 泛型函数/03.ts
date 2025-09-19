function swap <K, V> (a: K, b: V): [K, V] {
  return [a, b];
}
const result = swap<string, number>('abc', 123);
console.log(result[0].length, result[1].toFixed());

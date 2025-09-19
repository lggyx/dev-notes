(() => {
interface IPerson {
  id: number;
  name: string;
  sex?: string;
  sum(x: number, y: number): number;
}
const person2: IPerson = {
  id: 1,
  name: 'tom',
  age: 20,
  // sex: '男' // 可以没有
  sum(a: number, b: number): number {
    return a + b;
  },
};
})();

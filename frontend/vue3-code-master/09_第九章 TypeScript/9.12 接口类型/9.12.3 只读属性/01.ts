(() => {
interface IPerson {
  readonly id: number;
}

const person2: IPerson = {
  id: 2,
};
person2.id = 2; // error
})();

(() => {
  class Person {
    readonly name: string = 'abc';
    constructor(name: string) {
      this.name = name;
    }
  }
  
  let john = new Person('John');
  // john.name = 'peter' // error
})();
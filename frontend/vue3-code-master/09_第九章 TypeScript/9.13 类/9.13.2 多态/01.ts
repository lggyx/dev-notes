/*
多态
*/
class Animal {
  name: string
  
  constructor (name: string) {
    this.name = name;
  }

  run (distance: number=0) {
    console.log(`${this.name} run ${distance}m`);
  }
}

class Snake extends Animal {
  constructor (name: string) {
    // 调用父类型构造方法
    super(name);
  }

  // 重写父类型的方法
  run (distance: number=5) {
    console.log('sliding...');
    super.run(distance);
  }
}

class Horse extends Animal {
  constructor (name: string) {
    // 调用父类型构造方法
    super(name);
  }

  // 重写父类型的方法
  run (distance: number=50) {
    console.log('dashing...');
    // 调用父类型的一般方法
    super.run(distance);
  }
}

// 声明接收父类型对象
// 多态: 多种形态 => 声明需要的是一个Animal类型的对象, 
// 实际可以传入animal/horse/snake, 最终调用的都是实际对象的方法
function run (animal: Animal) {
  animal.run();
}

run(new Animal('aa'));
run(new Snake('ss'));
run(new Horse('hh'));
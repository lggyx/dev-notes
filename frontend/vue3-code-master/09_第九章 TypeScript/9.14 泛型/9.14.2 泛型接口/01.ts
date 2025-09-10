// 封装用户数据管理的类
// class UserCRUD {
//   data: User[] = []; // 内部存储的用户数组
//   add(user: User): number {
//     // 添加一个用户, 返回其id
//   }
//   getById(id: number): User {
//     // 根据id获取一个用户
//   }
// }

// 封装商品数据管理的类
// class ProductCRUD {
//   data: Product[] = []; // 内部存储的用户商品
//   add(user: Product): number {
//     // 添加一个商品, 返回其id
//   }
//   getById(id: number): Product {
//     // 根据id获取一个商品
//   }
// }


// 问题: 如何约束多个数据的管理类的API的一致性呢?

interface IbaseCRUD<T> {
  data: T[];
  add: (t: T) => void;
  getById: (id: number) => T|undefined;
}

class User {
  id?: number; //id主键自增
  name: string; //姓名
  age: number; //年龄

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class UserCRUD implements IbaseCRUD<User> {
  data: User[] = [];

  add(user: User): void {
    user = { ...user, id: Date.now() };
    this.data.push(user);
    console.log('保存user', user.id);
  }

  getById(id: number): User|undefined {
    return this.data.find((item) => item.id === id);
  }
}

// 测试使用
const userCRUD = new UserCRUD();
userCRUD.add(new User('tom', 12));
userCRUD.add(new User('tom2', 13));
console.log(userCRUD.data);

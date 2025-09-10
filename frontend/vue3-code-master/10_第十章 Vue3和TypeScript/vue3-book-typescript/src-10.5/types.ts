// 学生的类型接口
export interface Student {
  id: number;
  username: string;
  age: number;
  salary: number;
}

// 学生列表的类型别名
export type StudentList = Student[];

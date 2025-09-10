<template>
  <h1>首页</h1>
  <button @click="getStudentList">查询学生列表</button>
  <button @click="addStudent">添加学生</button>
  <button @click="updateStudent">更新学生</button>
  <button @click="deleteStudent">删除学生</button>
</template>

<script lang="ts" setup>
import axios from 'axios';
import type { AxiosResponse } from 'axios';

// 定义响应体Todo对象的类型
interface Student {
  id?: number;
  username: string;
  age: number;
  salary: number;
}
// 学生列表类型别名
type StudentList = Student[];

// 指定基础路由
axios.defaults.baseURL = 'http://localhost:3000';

// 请求获取学生列表
const getStudentList = async () => {
  // GET请求获取所有学生的列表
  // 第一个泛型指定为响应体数据的类型StudentList
  const response = await axios.get<StudentList>('/students');
  // 响应对象的data的类型就是StudentList类型
  const studentList = response.data;
  console.log(studentList);
};

// 请求添加一个学生
const addStudent = async () => {
  // 创建一个不包含id的新的学生对象
  const s = {
    username: 'AAA',
    age: 23,
    salary: 15000,
  };
  // post请求添加学生
  // 通过第一个泛型指定返回的响应体数据是Student
  // 由于要给过第三个泛型来指定请求体的类型为Student, 第二个泛型也指定
  const response = await axios.post<Student, AxiosResponse<Student>, Student>(
    '/students',
    s
  );
  // 得到请求返回的响应体: 新添加的学生对象(包含id)
  const student = response.data;
  console.log(student);
};

// 更新学生
const updateStudent = async () => {
  // 创建一个带id的学生对象(假设它是接口后台当前存在的)
  const s = {
    id: 2,
    username: 'BBB',
    age: 23,
    salary: 15000,
  };

  // put请求更新学生, 注意学生的id需要以params参数提交过去
  // 通过泛型指定返回的响应体数据是Student
  const response = await axios.put<Student, AxiosResponse<Student>, Student>(
    `/students/${s.id}`,
    s
  );
  // 得到请求返回的响应数据: 修改的学生对象
  const student = response.data;
  console.log(student);
};

// 删除学生
const deleteStudent = async () => {
  const id = 2;
  // delete请求删除学生
  // 请求返回的响应体数据是一个空对象, 不需要指定任何泛型类型
  const response = await axios.delete(`/students/${id}`);
  console.log(response.data);
};
</script>

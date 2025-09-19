/* 
利用jsonServerApi实例对象进行请求接口的封装
*/

// 引入jsonServerApi对象
import { jsonServerApi } from './baseAxios';

// 通过id获取用户信息
export const reqGetUser = async (id) => jsonServerApi.get(`/users/${id}`);

// 用户列表
export const reqGetUserList = async (params) =>
  jsonServerApi.get('/users', { params });

// 新增用户
export const reqAddUser = async (user) => jsonServerApi.post('/users', user);

// 修改用户
export const reqUpdateUser = async (user) =>
  jsonServerApi.put(`/users/${user.id}`, user);

// 删除用户
export const reqRemoveUser = async (id) => jsonServerApi.delete(`users/${id}`);

/* 
利用jsonServerAxios实进行用户CRUD接口请求函数的封装
*/

// 引入jsonServerAxios
import jsonServerAxios from './jsonServerAxios';

// 通过id获取用户信息
export const reqGetUser = async (id) => jsonServerAxios.get(`/users/${id}`);

// 用户列表
export const reqGetUserList = async (params) => jsonServerAxios.get('/users', { params });

// 新增用户
export const reqAddUser = async (user) => jsonServerAxios.post('/users', user);

// 修改用户
export const reqUpdateUser = async (user) => jsonServerAxios.put(`/users/${user.id}`, user);

// 删除用户
export const reqRemoveUser = async (id) => jsonServerAxios.delete(`users/${id}`);

<script setup>
import { onMounted, ref } from 'vue';
// 直接将getHttp, postHttp, putHttp, deleteHttp方法进行局部引入
import { reqGetUserList, reqAddUser, reqUpdateUser, reqRemoveUser, reqGetUser } from '@/request/usersApi';
const users = ref([]);
const error = ref('');
// 添加用户
const addUser = async () => {
  // 创建一个新的用户对象（没有id）
  const user = {
    name: 'atguigu',
    address: '北京',
    avatar: 'http://dummyimage.com/100x100/b6f279/FFF&text=atguigu',
  };
  // 请求新增用户
  await reqAddUser(user);
  // 成功后，重新获取用户列表
  getUsers(); 
};

// 更新用户
const updateUser = async (id) => {
  // 指定更新信息的用户对象
  const user = {
    id,
    name: '尚硅谷',
    address: '北京',
    avatar: 'http://dummyimage.com/100x100/b6f279/FFF&text=atguigu',
  };
  // 请求修改用户
  await reqUpdateUser(user);
  // 成功后，重新获取用户列表
  getUsers(); 
};

// 删除用户
const deleteUser = async (id) => {
  // 请求删除用户
  await reqRemoveUser(id);
  // 成功后，重新获取用户列表
  getUsers(); 
};

// 查看用户详情
const viewUserById = async (id) => {
  // 请求获取用户信息信息
  const result = await reqGetUser(id);
  // 成功后，得到用户信息，并提示
  const user = result.data;
  alert(JSON.stringify(user));
};

// 获取用户列表
const getUsers = async () => {
  try {
    // 请求获取用户的分页列表
    const result = await reqGetUserList({
      _page: 1, // 页码
      _limit: 5, // 每页数量
      _sort: 'id', // 根据id排序
      _order: 'desc', // 倒序
    });
    // 成功后，读取得到的用户列表，更新状态显示列表
    users.value = result.data;
  } catch (error) { // 如果请求失败，更新错误信息显示
    error.value = error.message;
  }
}

// 初始化获取用户列表显示
onMounted(() => {
  getUsers();
});
</script>

<template>
  <div v-if="error">error:{{ error }}</div>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span class="item-id">{{ user.id }}</span>
      <span class="item-name">{{ user.name }}</span>
      <a href="javascript:void(0)" @click="updateUser(user.id)">修改</a>
      &nbsp;
      <a href="javascript:void(0)" @click="deleteUser(user.id)">删除</a>
      &nbsp;
      <a href="javascript:void(0)" @click="viewUserById(user.id)">查看详情</a>
    </li>
  </ul>
  <button @click="addUser">新增用户</button>
</template>

<style>
.item-id {
  display: inline-block;
  width: 50px;
  margin-right: 10px;
}
.item-name {
  display: inline-block;
  width: 100px;
}
</style>

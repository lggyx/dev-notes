<script setup>
import { onMounted, ref } from 'vue';
// 直接将getHttp, postHttp, putHttp, deleteHttp方法进行局部引入
import { getHttp, postHttp, putHttp, deleteHttp } from '@/request/axiosApi';
const users = ref([]);
const error = ref('');

// 添加用户
const addUser = async () => {
  // 利用postHttp方法直接进行请求，新增用户
  await postHttp('http://localhost:5000/users', {
    name: 'atguigu',
    address: '北京',
    avatar: 'http://dummyimage.com/100x100/b6f279/FFF&text=atguigu',
  });
  getUsers(); // 重新获取用户列表
};

// 更新用户
const updateUser = async (id) => {
  // 利用putHttp方法直接进行请求，修改用户
  await putHttp(`http://localhost:5000/users/${id}`, {
    name: '尚硅谷',
    address: '北京',
    avatar: 'http://dummyimage.com/100x100/b6f279/FFF&text=atguigu',
  });
  getUsers(); // 重新获取用户列表
};

// 删除用户
const deleteUser = async (id) => {
  // 利用deletetHttp方法直接进行请求，删除用户
  await deleteHttp(`http://localhost:5000/users/${id}`);
  getUsers(); // 重新获取用户列表
};

// 查看用户详情
const viewUserById = async (id) => {
  const result = await getHttp(`http://localhost:5000/users/${id}`);
  const user = result.data;
  alert(JSON.stringify(user));
};

// 获取用户列表
const getUsers = async () => {
  try {
    // 利用getHttp方法直接进行请求，URL的query查询项组成可以在get请求中对应到params参数对象
    // const result = await getHttp(
    //  'http://localhost:5000/users?_page=1&_limit=5&_sort=id&_order=desc'
    // );
    const result = await getHttp('http://localhost:5000/users', {
      _page: 1,
      _limit: 5,
      _sort: 'id',
      _order: 'desc',
    });
    // axios请求的结果内容默认返回的是json类型，但是结果值被设置到data属性当中
    users.value = result.data;
  } catch (error) {
    error.value = error.message;
  }
};

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

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; // 引入axios

const list = ref([]);

onMounted(() => {
  // 调用axios的get方法发送ajax请求获取列表数据显示
  axios.get('/apiPrefix/cms/banner')
    .then(function (response) {
      // 请求成功，从response对象的data属性上得到响应体数据
      const result = response.data;
      // 从响应体中取出列表数据
      list.value = result.data;
    })
    .catch(function (error) {
      // 请求失败，提示error对象上的错误信息message
      alert(error.message);
    });
});

onMounted(() => {
  // 请求json-server与mockjs结合的模拟数据接口
  axios.get('http://localhost:5000/users')
    .then(function (response) {
      // 请求成功，从response对象的data属性上得到响应体数据
      const users = response.data;
      console.log(users);
    })
    .catch(function (error) {
      // 请求失败，提示error对象上的错误信息message
      alert(error.message);
    });
});

</script>

<template>
  <div class="app">
    <div class="item" v-for="item in list" :key="item.id">
      <span>{{ item.title }}</span>
      <img :src="item.imageUrl" alt="">
    </div>
  </div>
</template>

<style scoped>
  .item { height: 100px; margin: 10px; display: flex; align-items: center;}
  .item span { display: inline-block; width: 100px;}
  .item img { height: 100px; width: 100px;  }
</style>

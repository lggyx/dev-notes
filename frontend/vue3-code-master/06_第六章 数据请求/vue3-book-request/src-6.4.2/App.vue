<script setup>
import { ref, onMounted } from 'vue';

// 列表数据
const list = ref([])
// 初始化挂载回调
onMounted(()=> {
  // 调用fetch函数发送ajax请求获取列表数据显示
  fetch('/apiPrefix/cms/banner')
  .then(function (response) {
    // 返回包含响应JSON数据的promise对象
    return response.json()
  })
  .then(function (value) { // value为响应体数据对象
    // 取出列表数据更新显示
    list.value = value.data
  })
  .catch(function (error) {
    // 提示错误信息
    alert(error.message)
  })
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

<script setup>
import { ref, onMounted } from "vue";

/* 
AJAX请求函数
*/
function ajax(url) {
  // 利用Promise来封装异步的AJAX请求
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
      // 当请求完成时
      if (xhr.readyState == 4) {
        // 如果请求是成功的，解析响应体JSON数据为JS对象,并指定为promise成功的value
        if (xhr.status >= 200 && xhr.status < 300) {
          const result = JSON.parse(xhr.responseText);
          resolve(result);
        } else {
          // 如果请求失败，创建包含错误信息的error对象，并指定为promise失败的reason
          reject(new Error(`请求失败，错误信息为：${xhr.statusText}`));
        }
      }
    };
    xhr.send();
  });
}
// 列表数据
const list = ref([]);
// 初始化挂载回调
onMounted(() => {
  // 获取列表数据显示
  ajax("/apiPrefix/cms/banner")
    .then(value => {
      list.value = value.data;
    })
    .catch(error => {
      alert(error.message);
    });
});
</script>

<template>
  <div class="app">
    <div class="item" v-for="item in list" :key="item.id">
      <span>{{ item.title }}</span>
      <img :src="item.imageUrl" alt />
    </div>
  </div>
</template>

<style scoped>
  .item { height: 100px; margin: 10px; display: flex; align-items: center;}
  .item span { display: inline-block; width: 100px;}
  .item img { height: 100px; width: 100px;  }
</style>

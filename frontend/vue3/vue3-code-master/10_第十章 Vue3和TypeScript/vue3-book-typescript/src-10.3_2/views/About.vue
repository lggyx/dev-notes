<template>
  <h1>About页</h1>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

// 读取meta自定义配置时有自动补全提示
const hidden = route.meta.hidden
console.log(hidden)
</script>

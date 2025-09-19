<template>
  <div>
    <h1>编辑用户</h1>
    <!-- 接收路由的params参数，参数名称为id，并进行展示使用 -->
    <p>用户编号：{{ $route.params.id }}</p>
    <!-- 接收路由的query参数，参数名称为name以及age -->
    <p>用户名称：{{ $route.query.name }}</p>
    <p>用户年龄：{{ $route.query.age }}</p>

    <h2>属性映射的参数内容：</h2>
    <p>id:{{ id }}</p>
    <p>name:{{ name }}</p>
    <p>age:{{ age }}</p>

    <p>level:{{ level }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['id', 'name', 'age', 'level']);
</script>

<template>
  <div>
    <h1>用户详情</h1>
    <!-- 接收路由的params参数，参数名称为id -->
    <p>用户编号：{{ $route.params.id }}</p>
    <!-- 利用命名路由与对象模式进行路由跳转，明确参数的类型，清楚区分params参数与query参数 -->
      <router-link
        :to="{
          name: 'userEdit',
          params: { id: $route.params.id },
          query: { name: '张三', age: 18 },
        }"
        class="btn btn-primary"
      >编辑用户</router-link>
  </div>
</template>

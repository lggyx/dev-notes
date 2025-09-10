<template>
  <div>
    <h1>用户详情</h1>
    <!-- 接收路由的params参数，参数名称为id -->
    <p>用户编号：{{ $route.params.id }}</p>
    <!-- 对路由的params参数id进行编辑用户路由地址拼接的使用操作 -->
    <!-- 利用?号进行URL的search查询部分拼接，利用&符组装query参数-->
    <router-link
      :to="`/users/${$route.params.id}/edit?name=张三&age=18`"
      class="btn btn-primary"
      type="button"
      >编辑用户</router-link>
  </div>
</template>

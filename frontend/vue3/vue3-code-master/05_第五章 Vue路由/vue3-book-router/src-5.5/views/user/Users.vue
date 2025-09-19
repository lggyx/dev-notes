<template>
  <div>
    <!-- 用户页的面包屑导航 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-decoration-none">首页</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link to="/users" class="text-decoration-none">用户</router-link>
        </li>
      </ol>
    </nav>
    <!-- 用户列表以及用户查看、用户详情、编辑用户是左右两个独立的部分 -->
    <div class="row">
      <!-- 用户列表 -->
      <div class="col-3">
        <h1>用户列表</h1>
        <div class="list-group">
          <router-link
            to="/users/detail"
            class="list-group-item list-group-item-action"
            >用户 1</router-link
          >
          <router-link
            to="/users/detail"
            class="list-group-item list-group-item-action"
            >用户 2</router-link
          >
          <!-- 
            <a href="#" class="list-group-item list-group-item-action active">
              用户 1
            </a>
            <a href="#" class="list-group-item list-group-item-action">用户 2</a>
           -->
        </div>
      </div>
      <!-- 用户查看、用户详情、编辑用户 -->
      <div class="col-9">
        <!-- 
        <h1>请选择用户进行查看与编辑</h1>
        <h1>用户详情</h1>
        <h1>编辑用户</h1> 
        -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

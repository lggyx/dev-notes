<template>
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <router-link
      to="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <span class="fs-4">Vue路由</span>
    </router-link>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link to="/" class="nav-link">首页</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/users" class="nav-link">用户</router-link>
      </li>
    </ul>
  </header>
</template>

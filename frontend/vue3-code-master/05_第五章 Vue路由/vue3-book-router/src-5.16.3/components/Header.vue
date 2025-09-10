<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
  >
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

    <div class="dropdown text-end">
      <a
        href="#"
        class="d-block link-dark text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="@/assets/logo.png"
          alt="mdo"
          width="32"
          height="32"
          class="rounded-circle"
        />
      </a>
      <ul class="dropdown-menu text-small">
        <li><a href="#" class="dropdown-item" @click="login">用户登陆</a></li>
        <li><a href="#" class="dropdown-item" @click="logout">退出登陆</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const login = () => {
  localStorage.setItem('loggedin', true);
};

const logout = () => {
  localStorage.removeItem('loggedin');
};
</script>

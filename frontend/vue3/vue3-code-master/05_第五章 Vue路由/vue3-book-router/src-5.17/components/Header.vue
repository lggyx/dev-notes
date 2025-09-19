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
      <li class="nav-item">
        <router-link to="/products" class="nav-link">产品</router-link>
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
        <li>
          <a href="javascript:void(0)" class="dropdown-item" @click="login"
            >用户登陆</a
          >
        </li>
        <li>
          <a href="javascript:void(0)" class="dropdown-item" @click="logout"
            >退出登陆</a
          >
        </li>
        <li>
          <a
            href="javascript:void(0)"
            class="dropdown-item"
            @click="addProductsRoute"
            >动态添加产品页面</a
          >
        </li>
        <li>
          <a
            href="javascript:void(0)"
            class="dropdown-item"
            @click="removeProductsRoute"
            >动态删除产品页面</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const login = () => {
  localStorage.setItem('loggedin', true);
};

const logout = () => {
  localStorage.removeItem('loggedin');
};

const router = useRouter();

// 动态添加产品路由
const addProductsRoute = () => {
  // 如果路由中已经存在products产品路由对象，则直接跳转到产品页
  // 是否已经存在路由对象需要通过动态添加的路由对象中的name名称来判断
  if (router.hasRoute('products')) {
    router.push('/products');
    return;
  }
  // 如果路由中没有存在products产品路由对象，则需要将产品等页面与组件进行动态引入
  // 然后利用addRoute进行动态路由添加
  // 完成以后直接跳转到产品页
  const Header = () =>
    import(/* webpackChunkName: "group-comp" */ '@/components/Header');
  const Footer = () =>
    import(/* webpackChunkName: "group-comp" */ '@/components/Footer');
  const Products = () =>
    import(/* webpackChunkName: "group-products" */ '@/views/Products');
  router.addRoute({
    name: 'products',
    path: '/products',
    components: {
      default: Products,
      'router-view-header': Header,
      'router-view-footer': Footer,
    },
  });
  router.push('/products');
};

// 动态删除产品路由
const removeProductsRoute = () => {
  // 动态删除路由对象也是通过路由对象中的name名称来确认
  router.removeRoute('products');
  // 重新定位到首页
  router.push('/');
};
</script>

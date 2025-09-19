<script setup>
import HelloWorld from './components/HelloWorld.vue';
const changeHandler = () => {
  console.log('changeHandler', event);
};
const customClickHandler = (msg) => {
  console.log('customClickHandler: ', msg);
};
</script>

<template>
  <!--
    msg：定义props属性
    value、style：非props属性
    change：原生事件
    customClick：自定义事件
  -->
  <HelloWorld
    msg="你好，尚硅谷"
    value="尚硅谷欢迎你"
    style="color: red"
    @change="changeHandler"
    @customClick="customClickHandler"
  />
</template>

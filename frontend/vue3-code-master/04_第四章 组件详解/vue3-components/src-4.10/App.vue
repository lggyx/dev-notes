<script setup>
// 4.10.1~4.10.4
// import Quote from './components/Quote.vue';

// 4.10.5
import { ref } from 'vue';
import List from './components/List.vue';
const list = ref(['Javascript', 'Vue', 'React', 'Angular']);
</script>

<template>
  <!-- 4.10.1 -->
  <!-- <quote>
    <h1>标题</h1>
    <p>内容</p>
  </quote> -->
  <!-- <quote>
    <template v-slot:default>
      <h1>标题</h1>
      <p>内容</p>
    </template>
  </quote> -->

  <!-- 4.10.2 -->
  <!-- <quote>
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template>
  </quote> -->

  <!-- 4.10.3 -->
  <!-- <quote>
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template> -->
  <!-- 除了具名插槽，剩余部分都是默认插槽，包括hr与span -->
  <!-- <hr />
    <span>默认插槽</span>
  </quote> -->

  <!-- 4.10.4 -->
  <!-- <quote>
    <template v-slot:title>
      <h1>标题</h1>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template> -->
  <!-- 除了具名插槽，剩余部分都是默认插槽，包括hr与span -->
  <!-- <hr />
    <span>默认插槽</span> -->
  <!-- 如果v-slot:subTitle进行了传递则显示传递的值 -->
  <!-- <template v-slot:subTitle>
      <h2>传递的副标题</h2>
    </template>
  </quote> -->

  <!-- 4.10.5 -->
  <List :list="list">
    <template v-slot="{ item, index }">
      <li v-if="index % 2">
        <b>{{ item }}</b>
      </li>
      <li v-else>
        <i>{{ item }}</i>
      </li>
    </template>
  </List>
</template>

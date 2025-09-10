<script setup lang="ts">
import ChildHtml from './components/ChildHtml.vue';
import { onMounted, ref } from 'vue';
import ChildComp from './components/ChildComp.vue';

// const childRef = ref();
const childRef = ref<InstanceType<typeof ChildComp>>();
onMounted(() => {
  // childRef.value.fn();
  childRef.value?.fn();
});
</script>

<template>
  <ChildHtml />
  <hr />
  <ChildComp ref="childRef" />
</template>

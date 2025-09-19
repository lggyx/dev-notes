<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const count = ref(0);
const increase = (step) => {
  count.value += step;
};
</script>

<template>
  <HelloWorld @increaseParentCount="increase" />
  <p>count:{{ count }}</p>
</template>

<template>
  <div>
    <count-show/>
    <hr />
    <count-update/>
  </div>
</template>

<script setup>
import CountShow from './CountShow.vue';
import CountUpdate from './CountUpdate.vue';
</script>

<script>
export default {
  name: 'Counter',
};
</script>

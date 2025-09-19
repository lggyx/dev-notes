<script setup>
defineProps(['list']);
</script>
<template>
  <slot v-for="(item, index) in list" :item="item" :index="index"></slot>
</template>

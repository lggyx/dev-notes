<template>
  <div>
    <input v-bind="$attrs" />
    <p>{{ props.msg }}</p>
    <button @click="$emit('customClick', '自定义事件')">
      自定义事件的触发
    </button>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue';
const props = defineProps(['msg']);
const attrs = useAttrs();
console.log('props: ', props);
console.log('attrs: ', attrs);
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>

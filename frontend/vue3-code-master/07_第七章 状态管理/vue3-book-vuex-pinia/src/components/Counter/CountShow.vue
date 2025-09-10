<template>
  <div>
    点击次数为: {{ count }}, 当前次数为: {{oddOrEven}}
  </div>
</template>

<script setup>
  import {computed} from 'vue'
  // 声明接收count属性
  const props = defineProps({
    count: Number
  })
  // 定义奇偶数的计算属性
  const oddOrEven = computed(() => {
    return props.count%2 === 1 ? '奇数' : '偶数'
  })

</script>

<script>
export default {
  name: 'CountShow',
}
</script>
<script setup lang="ts">
// 定义接收属性--不使用泛型
// defineProps({
//   msg: {
//     type: [String, Number], // String或Number类型
//     required: false, // 不是必须的
//   },
//   setMsg: {
//     type: Function, // 函数
//     required: true, // 必须的
//   },
// });

// 定义接收属性--使用泛型
// defineProps<{
//   msg?: string | number;
//   setMsg: (val: string) => void;
// }>();

// 定义接收属性--使用接口+泛型
interface Props {
  msg?: string | number;
  setMsg: (val: string) => void;
}
defineProps<Props>();

// 指定属性默认值
withDefaults(defineProps<Props>(), { msg: 'atguigu' });
</script>

<template>
  <p>HelloWorld</p>
</template>

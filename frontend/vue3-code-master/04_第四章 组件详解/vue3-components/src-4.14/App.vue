<template>
  <!-- background为钩子函数中binding里的arg参数 -->
  <!-- delayed与blink为钩子函数中binding里的modifiers修饰符内容 -->
  <!-- {mainColor:'red',secondColor:'green',delay:500}为钩子函数中binding里的value值内容 -->
  <p
    v-highlight:background.delayed.blink="{
      mainColor: 'red',
      secondColor: 'green',
      delay: 500,
    }"
  >
    自定义指令的调用
  </p>
</template>

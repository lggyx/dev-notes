<script setup>
import { ref } from 'vue';
const isOpen = ref(false); // 控制是否显示模态框
const isTeleport = ref(false); // 控制是否禁用 Teleport
</script>

<template>
  <!-- 按钮部分将被嵌套于#app元素当中 -->
  <button @click="isOpen = !isOpen">
    {{ isOpen ? '关闭' : '打开' }}模态框
  </button>
  <button @click="isTeleport = !isTeleport">
    {{ isTeleport ? '禁用' : '非禁用' }}穿梭功能
  </button>
  <!-- 利用Teleport内置组件将其包裹的元素穿梭到body标签内 -->
  <Teleport to="body" :disabled="isTeleport">
    <!-- 动画效果增强视觉 -->
    <Transition mode="in-out">
      <!-- 利用v-if控制模态框的显示与隐藏 -->
      <div v-if="isOpen" class="modal">
        <p>元素被穿梭到Body，与#app的div元素属并列关系</p>
        <!-- 按钮点击控制模态框的隐藏显示 -->
        <button class="close" type="button" @click="isOpen = false">
          关闭
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  isolation: isolate;
  z-index: 1;
  top: 2rem;
  left: 2rem;
  width: 20rem;
  border: 1px solid grey;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: grey;
  box-shadow: 2px 2px 4px grey;
  backdrop-filter: blur(4px);
  color: #f4f4f4;
}
button {
  padding: 0.5rem;
  border: 0;
  border-radius: 1rem;
  box-shadow: inset 0 -1px 4px grey, 1px 1px 4px grey;
  cursor: pointer;
  transition: box-shadow 0.15s ease-in-out;
}
button:hover {
  box-shadow: inset 0 -1px 2px grey, 1px 1px 2px grey;
}
.close {
  display: block;
  margin-left: auto;
}
/* 在没有设置name时可以设置统一的动画样式类名，以v-xxx方式命名 */
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-10vw);
}
</style>

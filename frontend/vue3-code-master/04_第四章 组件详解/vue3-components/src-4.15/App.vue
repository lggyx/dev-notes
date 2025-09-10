<template>
  <button @click="changeTab(Comp1)">ChangeComp1</button>
  <button @click="changeTab(Comp2)">ChangeComp2</button>
  <component :is="tab"></component>
</template>
<script setup>
import Comp1 from './components/Comp1.vue';
import Comp2 from './components/Comp2.vue';
import { ref, markRaw } from 'vue';
const tab = ref(null);
function changeTab(comp) {
  tab.value = markRaw(comp);
}
changeTab(Comp1);
</script>

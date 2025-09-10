<template>
  <div>
    <p>msg:{{ msg }}</p>
    <p>count:{{ count }}</p>
    <p>double:{{ double }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<script setup>
import countHook from '../hooks/countHook';
const { msg, count, increase, double } = countHook(2);
</script>

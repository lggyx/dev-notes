<template>
  <div>
    点击次数为: {{ store.state.counter.count }}, 当前次数为:
    {{ store.getters.oddOrEven }}
  </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

</script>

<script>
export default {
  name: 'CountShow',
};
</script>

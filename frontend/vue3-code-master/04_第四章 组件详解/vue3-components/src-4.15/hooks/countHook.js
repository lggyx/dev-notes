import { ref, computed, watch } from 'vue';
export default (initCount = 0) => {
  const msg = ref('你好，尚硅谷');
  const count = ref(initCount);

  const increase = () => {
    count.value++;
  };

  const double = computed(() => {
    return count.value * 2;
  });

  watch(double, (newVal, oldVal) => {
    console.log('newVal', newVal);
    console.log('oldVal', oldVal);
  });

  return { msg, count, increase, double };
};

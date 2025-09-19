import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
app.directive('highlight', {
  // 自定义指令的mounted钩子函数
  mounted(el, binding) {
    let delay = 0; // 利用binding.modifiers获取delayed修饰符值进行判断 // 如果有此修饰符，则将delay值设置为3000
    if (binding.modifiers.delayed) {
      delay = 3000;
    } // 利用binding.modifiers获取blink修饰符值进行判断 // 如果有此修饰符，则进行闪烁效果
    if (binding.modifiers.blink) {
      // 利用binding.value获取主颜色以及次颜色
      let mainColor = binding.value.mainColor;
      let secondColor = binding.value.secondColor; // 设置当前颜色先为主色
      let currentColor = mainColor; // 设置延时定时器
      setTimeout(() => {
        // 设置闪烁定时器
        setInterval(() => {
          // 三元运算确认当前颜色
          currentColor == secondColor
            ? (currentColor = mainColor)
            : (currentColor = secondColor);
          if (binding.arg === 'background') {
            // 背景
            el.style.backgroundColor = currentColor;
          } else {
            // 字体
            el.style.color = currentColor;
          }
        }, binding.value.delay); // 闪烁间隔时间
      }, delay); // 延迟3秒
    } else {
      // 没有blink修饰符，则直接设置颜色
      setTimeout(() => {
        // 利用binding.arg获取background参数值进行判断
        if (binding.arg === 'background') {
          // 背景颜色设置
          el.style.backgroundColor = binding.value.mainColor;
        } else {
          // 字体颜色设置
          el.style.color = binding.value.mainColor;
        }
      }, delay); // 延迟3秒
    }
  },
});
app.mount('#app');

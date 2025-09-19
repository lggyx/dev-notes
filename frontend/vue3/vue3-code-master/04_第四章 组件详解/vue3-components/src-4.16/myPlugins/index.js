// 插件定义第一种方式，对象：拥有 install() 方法的对象
const myPlugin = {
  install(app, options) {
    // 配置全局方法
    app.config.globalProperties.globalMethod = function (value) {
      return value.toLowerCase();
    };
    // 注册全局组件
    app.component('Header', Header);
    // 注册全局指令
    app.directive('upper', function (el, binding) {
      // 通过指令参数判断调用插件的options可选参数
      el.textContent = binding.value.toUpperCase();
      if (binding.arg === 'small') {
        el.style.fontSize = options.small + 'px';
      } else if (binding.arg === 'medium') {
        el.style.fontSize = options.medium + 'px';
      } else {
        el.style.fontSize = options.large + 'px';
      }
    });
  }
};


/*
// 函数插件
const myPlugin = function (app, options) {
  // 配置全局方法
  app.config.globalProperties.globalMethod = function (value) {
    return value.toLowerCase()
  }
  // 注册全局组件
  app.component("Header", Header)

  // 注册全局指令
  app.directive("upper", function (el, binding) {
    // 通过指令参数判断调用插件的options可选参数
    el.textContent = binding.value.toUpperCase() 
    if (binding.arg === "small") {
      el.style.fontSize = options.small + "px"
    } else if (binding.arg === "medium") {
      el.style.fontSize = options.medium + "px"
    } else {
      el.style.fontSize = options.large + "px"
    }
  })
}
*/

export default myPlugin;
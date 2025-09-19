(() => {
  let myName = 'atguigu';
  myName = 2015; // 不能将类型“number”分配给类型“string”
})();

(() => {
  let myName; // 相当于 let myName:any;
  myName = 'atguigu';
  myName = 2015;
})();
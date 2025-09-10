(() => {
  let myName: string | number;
  myName = 'atguigu';
  console.log(myName.length); // 7
  myName = 2015;
  console.log(myName.length); // error 类型“number”上不存在属性“length”

})();
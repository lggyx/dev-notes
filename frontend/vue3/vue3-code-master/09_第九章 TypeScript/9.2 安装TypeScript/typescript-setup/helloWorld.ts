/* 
注意：我们的代码包在了一个自调用函数中，因为const声明的变量hi与helloWord.js中的hi重复了，vscode会提示错误
  后面的测试代码也会做类似处理
*/
// const hi: string = '你好，这是TypeScript程序文件';
// console.log(hi);

(() => {
  const hi: string = '你好，这是TypeScript程序文件';
  console.log(hi);
})()
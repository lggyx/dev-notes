(() => {
  function add(x, y) {
    return x + y;
  }

  // 正确调用
  const result = add(2, 3); // 5
  // 错误调用
  const result2 = add('2', '3'); // '23'
})();

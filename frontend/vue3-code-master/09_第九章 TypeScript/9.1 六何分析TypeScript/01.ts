(() => {
  function add(x: number, y: number): number {
    return x + y;
  }

  const result3 = add(2, 3); // 5
  const result4 = add('2', '3'); // 直接提示错误
})();

(() => {
  let myName: unknown = 2015.8;
  let num = Math.round(myName);
})();

(() => {
  let myName: unknown = 2015.8;
  if (typeof myName === 'number') {
    let num = Math.round(myName);
  }
})();
(() => {
  enum Status {
    padding = 'Padding',
    resolved = 'Resolved',
    rejected = 'Rejected'
  }
  
  let status: Status = Status.padding;
  // status = 'abc'  // error 不能是枚举之外的值
})();
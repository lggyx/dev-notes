// 默认是数值枚举
enum Color {
  Red,
  Yellow=2,
  Green
}
console.log(Color);

let cat = {
  name: 'tom',
  color: 1
}

switch (cat.color) {
  case Color.Red:
    console.log('你的猫是红色的');
    break;
  case Color.Yellow:
    console.log('你的猫是黄色的');
    break;
  case Color.Green:
    console.log('你的猫是绿色的');
    break;
  default:
    console.log('你的猫是其它色的');
}

interface Alarm {
  alert(): any;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

// 此时LightableAlarm接口就有了父类型的3个方法声明
interface LightableAlarm extends Alarm, Light {}

import 'vue-router';

declare module 'vue-router' {
  // 扩展meta配置中的自定义属性，也就是写meta配置时有补全提示
  interface _RouteRecordBase {
    hidden: boolean;
  }
  // 扩展路由对象中的meta属性对象中的自定义属性，也就是route.meta.时会提示
  // interface RouteMeta {
  //   hidden: boolean;
  // }
}

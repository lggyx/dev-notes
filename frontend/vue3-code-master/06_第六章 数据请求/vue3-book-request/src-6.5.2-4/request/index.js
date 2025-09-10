// 利用request目录的index.js默认主程序进行所有模块的统一管理
// 可以将不同的模块接口函数进行统一导入并导出
export {
  reqGetUser,
  reqGetUserList,
  reqAddUser,
  reqUpdateUser,
  reqRemoveUser,
} from './usersApi' // 统一从用户模块引入用户接口请求函数并暴露

// 以后还可以引入其它模块接口函数并暴露

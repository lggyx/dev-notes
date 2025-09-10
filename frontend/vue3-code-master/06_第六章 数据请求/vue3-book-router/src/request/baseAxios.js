import axios from 'axios';

// 全局设置axios请求的headers头信息
axios.defaults.headers['Authorization'] = 'AUTH_TOKEN';

// 创建axios实例方法
export function createAxios(options = {}) {
  return axios.create({
    ...options,
  });
}

// 创建localApi实例对象
const localApi = createAxios();

// 封装基础axios请求函数，将url、method、options动态内容进行参数化抽离
export default async (url, method, options = {}) =>
  localApi({
    method: method.toUpperCase(),
    url,
    ...options,
  });

// 创建jsonServerApi实例对象
export const jsonServerApi = createAxios({
  baseURL: 'http://localhost:5000/',
  // 可以创建实例的时候统一设置
  timeout: 1000 * 20, // 请求超时时长
  headers: {
    'X-Custom-Header': 'custom value', // header头信息中自定义头信息设置
  },
});

// 模拟保存登陆请求返回的token到local中
localStorage.setItem('TOKEN_KEY', 'atguigu_123');
// 添加请求拦截器
jsonServerApi.interceptors.request.use(
  function (config) {
    // 每次请求前执行

    // 读取local中的token, 如果token添加到请求头中
    const token = localStorage.getItem('TOKEN_KEY');
    if (token) {
      config.headers['token'] = token;
    }
    // 返回配置
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
jsonServerApi.interceptors.response.use(
  function (response) {
    // 请求能够正常响应不代表一定能够获取到服务器返回的数据
    // 有时候请求成功服务器却会因为具体的业务场景返回一定的错误企业编码与数据信息
   
    // 可以返回指定对象，包括响应状态码(或者企业code码）、状态提示文本(或者企业状态提示文本)、返回数据等
    // return {
    //  code: response.status,
    //  message: response.statusText,
    //  data: response.data,
    // };

    // 也可以将直接将response.data，组件中不需要每次都去操作data属性节点
    return response.data;
  },
  function (error) {
    if (!error.response) {
      alert('网络连接不上，请检查网络')
    } else if (error.response) { // 根据响应状态码，设置不同的错误提示信息
      switch (error.response.status) {
        case 400:
          error.message = '错误请求';
          break;
        case 401:
          error.message = '未授权，请重新登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '请求错误,未找到该资源';
          break;
        case 405:
          error.message = '请求方法未允许';
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器端出错';
          break;
        case 501:
          error.message = '网络未实现';
          break;
        case 502:
          error.message = '网络错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网络超时';
          break;
        case 505:
          error.message = 'http版本不支持该请求';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
      // 统一错误处理可以放这，例如页面提示错误...
      alert(error.message)
    }
    return Promise.reject(error);
  }
);

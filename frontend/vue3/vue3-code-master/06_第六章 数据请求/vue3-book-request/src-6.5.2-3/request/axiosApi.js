/* 
对axios封装成四种请求方法的请求函数
*/
import axios from 'axios'

// get请求获取数据请求方法的封装，可设置params参数传递
// 需要注意axiox中的params参数对应的是URL组成部分中的query查询项参数
export const getHttp = async (url, params, options) =>
  axios({
    method: 'GET',
    url,
    params,
    ...options
  });

// post请求新增数据的封装，可设置data参数传递
export const postHttp = async (url, data, options) =>
  axios({
    method: 'POST',
    url,
    data,
    ...options
  });

// put请求修改数据的封装，可设置data参数传递
export const putHttp = async (url, data, options) =>
  axios({
    method: 'PUT',
    url,
    data,
    ...options
  });

// delete请求删除数据的封装，可设置data参数传递
export const deleteHttp = async (url, data, options) =>
  axios({
    method: 'DELETE',
    url,
    data,
    ...options
  });
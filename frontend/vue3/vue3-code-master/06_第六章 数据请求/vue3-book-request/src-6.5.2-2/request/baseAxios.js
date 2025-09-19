import axios from 'axios';

// 创建针对json-server提供的接口的axios
export const jsonServerAxios = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 10000
});

// 创建针对另一个服务器上的axios
export const otherAxios = axios.create({
  baseURL: 'http://www.xxx.com:6000/', 
  timeout: 20000
});
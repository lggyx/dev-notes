<script setup>
/* 第一步：创建 XMLHttpRequest 的实例对象 */
const xhr = new XMLHttpRequest();
/* 第二步：初始化请求，指定请求方式和请求地址 */
// const url = 'http://39.98.123.211:8510/api/cms/banner';
const url = '/apiPrefix/cms/banner';
xhr.open('GET', url);
/* 第三步：给对象绑定readyStateChange事件监听，用于读取异步请求的响应结果数据 */ 
xhr.onreadystatechange = function () {

  /* 第五步：当请求完成后，如果成功，读取响应数据并处理，如果失败，进行提示 */
  /**
   * readyState  0 请求未初始化  刚刚实例化XMLHttpRequest
   * readyState  1 客户端与服务器建立链接  调用open方法
   * readyState  2 请求已经被接收
   * readyState  3 请求正在处理中
   * readyState  4 请求完成
   */
  // 当请求完成时
  if (xhr.readyState == 4) {
    /**
     * status 响应状态码，有2xx(成功)、3xx(重定向)、4xx(客户端错误)、5xx(服务器错误)
     * responseText 是服务器端返回的响应体文本内容
     */
    // 如果请求是成功的，解析响应体JSON数据为JS对象,并在控制台输出
    if (xhr.status >= 200 && xhr.status < 300) {
      const result = JSON.parse(xhr.responseText);
      console.log(result);
    } else { // 如果请求失败，提示错误信息
      alert(`请求失败，错误信息为：${xhr.statusText}`);
    }
  }
};

/* 第四步：发送请求 */ 
xhr.send()
</script>

<template>
  <div>App</div>
</template>

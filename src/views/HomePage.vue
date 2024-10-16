<!-- 首页 -->
 <script>
// import CryptoJS from 'crypto-js'
// const requestObj = {
//   APPID: '你的appid',
//   APISecret: '你的apisecret',
//   APIKey: '你的apikey',
//   Uid: 'xzm', // 说明下uid自己定，唯一就行
//   sparkResult: '', // 这里放你获取到的结果
// }
// // 鉴权url地址
// const getWebsocketUrl = () => {
//   return new Promise((resovle, reject) => {
//     // let url = "wss://spark-api.xf-yun.com/v1.1/chat";
//     let url = 'wss://spark-api.xf-yun.com/v2.1/chat' // 可以改成2.1的接口
//     let host = 'spark-api.xf-yun.com' // 主机地址
//     let apiKeyName = 'api_key' // API密钥的参数名
//     let date = new Date().toGMTString() // 当前时间的GMT字符串表示
//     let algorithm = 'hmac-sha256'// 使用的哈希算法
//     let headers = 'host date request-line' // 鉴权所需的头部信息
//     // let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
//     let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2.1/chat HTTP/1.1` // 构建用于生成签名的原始字符串
//     // 加密方法
//     let signatureSha = CryptoJS.HmacSHA256(
//       signatureOrigin,
//       requestObj.APISecret
//     )
//     // 生成的加密签名
//     let signature = CryptoJS.enc.Base64.stringify(signatureSha)
//     // 构建鉴权头部信息
//     let authorizationOrigin = `${apiKeyName}="${requestObj.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
//     let authorization = base64.encode(authorizationOrigin)
//     // 构建最终的 WebSocket URL
//     url = `${url}?authorization=${authorization}&date=${encodeURI(
//       date
//     )}&host=${host}`
//     resovle(url)
//   })


</script>
<template>
  <div>
   首页
  </div>
</template>

<style>
/* 你的样式 */
</style>

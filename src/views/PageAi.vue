<template>
    <div class="AIchat">
        <div class="title">
            <p>女书新语</p>
        </div>
        <div class="receive">
            <textarea id="result" v-model="sparkResult" readonly></textarea>
        </div>
        <div class="send">
            <input type="text" id="question" placeholder="输入你想问的问题" v-model="inputVal"><button :disabled="false"
                @click="sendMsg" id="btn">发送</button>
        </div>
    </div>
</template>

<script setup>
import * as base64 from "base-64"
import CryptoJs from "crypto-js"
import { ref } from "vue";


// let btnDisable = 'false'

//获取鉴权url地址
const requestObj = {
    APPID: 'dd6d5ad5',
    APISecret: 'YzFjZmMzMWViZmZkZjcyMDc1ODI2ZTRj',
    APIKey: '04ed59557143013232c338d17913aaf9',
    Uid: '041213', // 说明下uid自己定，唯一就行
}
let sparkResult = ref('') // 这里放你获取到的结果
const inputVal = ref('')

// 鉴权url地址
const getWebsocketUrl = () => {
    return new Promise((resovle) => {
        let url = 'wss://spark-api.xf-yun.com/v3.5/chat' // 可以改成2.1的接口
        let host = 'localhost:5173' // 主机地址
        let apiKeyName = 'api_key' // API密钥的参数名
        let date = new Date().toGMTString() // 当前时间的GMT字符串表示
        let algorithm = 'hmac-sha256'// 使用的哈希算法
        let headers = 'host date request-line' // 鉴权所需的头部信息
        // let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v1.1/chat HTTP/1.1`;
        let signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v3.5/chat HTTP/1.1` // 构建用于生成签名的原始字符串
        // 加密方法
        let signatureSha = CryptoJs.HmacSHA256(
            signatureOrigin,
            requestObj.APISecret
        )
        // 生成的加密签名
        let signature = CryptoJs.enc.Base64.stringify(signatureSha)
        // 构建鉴权头部信息
        let authorizationOrigin = `${apiKeyName}="${requestObj.APIKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
        let authorization = base64.encode(authorizationOrigin)
        // 构建最终的 WebSocket URL
        url = `${url}?authorization=${authorization}&date=${encodeURI(
            date
        )}&host=${host}`
        // console.log("鉴权url地址2", url)
        resovle(url)
    })
}
// 发送消息
const sendMsg = async () => {
    // 获取请求地址
    const myUrl = await getWebsocketUrl()
    // 获取输入框中的内容
    // 每次发送问题 都是一个新的websocket请求
    let socket = new WebSocket(myUrl)
    // 监听websocket的各阶段事件 并做相应处理
    socket.addEventListener('open', (event) => {
        console.log('开启连接！！', event)
        // 发送消息
        let params = {
            header: {
                app_id: requestObj.APPID,
                uid: requestObj.Uid,
            },
            parameter: {
                chat: {
                    domain: 'generalv3.5',
                    temperature: 0.5,
                    max_tokens: 1024,
                },
            },
            payload: {
                message: {
                    // 如果想获取结合上下文的回答，需要开发者每次将历史问答信息一起传给服务端，如下示例
                    // 注意：text里面的所有content内容加一起的tokens需要控制在8192以内，开发者如有较长对话需求，需要适当裁剪历史信息
                    text: [
                        { role: 'user', content: inputVal.value }, //# 最新的一条问题，如无需上下文，可只传最新一条问题
                    ],
                },
            },
        }
        socket.send(JSON.stringify(params))
    })
    socket.addEventListener('message', (event) => {
        let data = JSON.parse(event.data)
        console.log('收到消息！！', data)
        sparkResult.value += data.payload.choices.text[0].content
        if (data.header.code !== 0) {
            console.log('出错了', data.header.code, ':', data.header.message)
            // 出错了"手动关闭连接"
            socket.close()
        }
        if (data.header.code === 0) {
            // 对话已经完成
            if (data.payload.choices.text && data.header.status === 2) {
                sparkResult.value += data.payload.choices.text[0].content
                setTimeout(() => {
                    // "对话完成，手动关闭连接"
                    socket.close()
                }, 3000)
            }
        }
        addMsgToTextarea(sparkResult.value)
    })
    socket.addEventListener('close', (event) => {
        inputVal.value = ''
        console.log('连接关闭！！', event)
        // 对话完成后socket会关闭，将聊天记录换行处理
        sparkResult.value = sparkResult.value + '\n\n'
        addMsgToTextarea(sparkResult.value)
        // btnDisable.value = false
        // 清空输入框
    })
    // socket.addEventListener('error', (event) => { })
}

// 这就是我们最终获取到的结果，输出在我们的页面上即可
const addMsgToTextarea = (text) => {
    sparkResult.value = text
}
</script>

<style lang="less">
.AIchat {
    width: 1000px;
    // height: 700px;
    // background-color: skyblue;
    padding: 5px;

    .title {
        padding: 15px;
        border-bottom: 1px solid #615f5f;

        p {
            font-size: 20px;
            color: #7d7979;
        }
    }

    .receive {
        width: 100%;
        height: 600px;
        padding-top: 15px;
        #result {
            width: 100%;
            height: 100%;
            border: none;
            resize: none;
            outline: none;
            background-color: #a8b092;
            opacity: 0.6;
            font-size: 20px;
            padding: 10px;
            color: #393425;
            // border-radius: 10px;
        }
    }

    .send {
        width: 100%;
        border-top: 2px solid #d1d1d1;

        #question {
            border: none;
            width: 935px;
            height: 50px;
            padding: 5px;

        }

        button {
            width: 55px;
            height: 50px;
            background-color: #79836c;
            opacity: 0.5;
            border: none;
            // border-radius: 10px;
            cursor: pointer;
        }
    }
}
</style>

<template>
    <div class="AIchat">
        <div class="title">
            <p>女书新语</p>
        </div>
        <div class="receive">
            <div class="msg-box">
                <div class="ai-bubble" v-for="(msg, index) in bubbleMessages" :key="index">
                    {{ msg }}
                </div>
            </div>
        </div>
        <div class="send">
            <input type="text" id="question" placeholder="输入你想问的问题" v-model="inputVal"><button :disabled="false"
                @click="sendMsg" id="btn" @keyup.enter="sendMsg">发送</button>
        </div>
    </div>
</template>

<script setup>
import * as base64 from "base-64"
import CryptoJs from "crypto-js"
import { ref, nextTick } from "vue";


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
const bubbleMessages = ref([]) // 用于渲染气泡的数组
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
        inputVal.value = ''
    })
    // socket.addEventListener('error', (event) => { })
}

// 这就是我们最终获取到的结果，输出在我们的页面上即可
const addMsgToTextarea = (text) => {
    bubbleMessages.value = text.split('\n\n').filter(m => m.trim() !== '')
    sparkResult.value = text
    nextTick(() => {
        const container = document.querySelector('.receive')
        container.scrollTop = container.scrollHeight
    })
}
</script>

<style lang="less">
.AIchat {
    width: 800px;
    margin: 40px auto;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    background: #f7f6f1;
    overflow: hidden;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

    .title {
        padding: 20px;
        background: #79836c;
        color: #fff;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 2px;
        border-bottom: 2px solid #5f6654;
    }

        .receive {
            height: 500px;
            background: #eae9e3;
            padding: 20px;
            overflow-y: auto;
    
            .msg-box {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
    
            .ai-bubble {
                max-width: 80%;
                align-self: flex-start;
                background-color: #ffffff;
                color: #333;
                padding: 12px 16px;
                font-size: 16px;
                border-radius: 16px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                position: relative;
                line-height: 1.5;
            }
    
            .ai-bubble::before {
                content: '';
                position: absolute;
                top: 10px;
                left: -10px;
                width: 0;
                height: 0;
                border: 10px solid transparent;
                border-right-color: #ffffff;
            }
        }

    .send {
        display: flex;
        align-items: center;
        border-top: 2px solid #d1d1d1;
        background: #f4f3ef;

        #question {
            flex: 1;
            height: 50px;
            font-size: 16px;
            padding: 10px 15px;
            border: none;
            outline: none;
            background: #fff;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        button {
            width: 80px;
            height: 50px;
            background-color: #79836c;
            color: white;
            font-weight: bold;
            font-size: 16px;
            border: none;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #6a745e;
            }

            &:disabled {
                background-color: #b5b5b5;
                cursor: not-allowed;
            }
        }
    }
}
</style>


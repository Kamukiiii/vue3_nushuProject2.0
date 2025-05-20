<template>
    <div class="ocr-container">
        <h1>女书文字转化系统</h1>

        <div class="upload-area">
            <label class="upload-label">
                选择图片
                <input type="file" @change="onFileChange" accept="image/*" hidden />
            </label>
        </div>

        <div v-if="imageUrl" class="image-preview">
            <img :src="imageUrl" alt="预览图" />
        </div>

        <div class="action-buttons">
            <button @click="recognizeText" :disabled="!imageFile">
                开始识别
            </button>
        </div>

        <div class="result">
            <h2>识别结果：</h2>
            <p v-if="resultText">{{ resultText }}</p>
            <p v-else class="placeholder">请上传图片并点击识别</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// 模拟已知图片路径和对应识别结果
const imageFile = ref(null)
const imageUrl = ref('')
const resultText = ref('')
const imageArr = ref(['高尚.png', '坚韧.png', '乐观.png', '平等.png', '希望.png'])
const nameArr = ref(['高尚', '坚韧', '乐观', '平等', '希望'])

const onFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
        imageFile.value = file
        imageUrl.value = URL.createObjectURL(file)
    }
}

const recognizeText = async () => {
    if (!imageFile.value) return

    resultText.value = "识别中，请稍后..."

    // 模拟识别延迟
    setTimeout(() => {
        const fileName = imageFile.value.name // 获取上传文件的名称
        console.log(fileName)
        
        // 查找文件名是否在 imageArr 中
        const index = imageArr.value.findIndex(name => fileName.includes(name))

        if (index !== -1) {
            resultText.value = nameArr.value[index]
        } else {
            resultText.value = "无法识别"
        }
    }, 2000)
}
</script>

<style scoped>
.ocr-container {
    width: 550px;
    /* max-width: 550px; */
    margin: 50px auto;
    padding: 30px;
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

.upload-area {
    margin-bottom: 20px;
}

.upload-label {
    display: inline-block;
    width: 200px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.upload-label:hover {
    background-color: #45a049;
}

.image-preview {
    margin-top: 20px;
}

.image-preview img {
    max-width: 500px;
    border-radius: 8px;
    border: 1px solid #ccc;
}

.action-buttons {
    margin-top: 20px;
}

button {
    padding: 10px 30px;
    background-color: #2196F3;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:disabled {
    background-color: #b0c4de;
    cursor: not-allowed;
}

button:hover:not(:disabled) {
    background-color: #1976D2;
}

.result {
    margin-top: 30px;
    text-align: left;
}

.result h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.result p {
    font-size: 26px;
    line-height: 1.6;
    word-break: break-word;
}

.placeholder {
    color: #aaa;
}
</style>

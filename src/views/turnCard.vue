<!-- 翻牌界面 -->
<script setup>
import { computed, onBeforeUnmount,ref } from 'vue';
import src1 from "../assets/images/pic1.jpg"
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import pic5 from '../assets/images/pic5.png';
import pic6 from '../assets/images/pic6.png';
import pic7 from '../assets/images/pic7.png';
import pic8 from '../assets/images/pic8.png';
import pic9 from '../assets/images/pic9.png';
import pic10 from '../assets/images/pic10.png';
const data = ref([
    { src1: src1, src2: pic2},
    { src1: src1, src2: pic3},
    { src1: src1, src2: pic4},
    { src1: src1, src2: pic5 },
    { src1: src1, src2: pic6 },
    { src1: src1, src2: pic7 },
    { src1: src1, src2: pic8 },
    { src1: src1, src2: pic9 },
    { src1: src1, src2: pic10 },
]);
//获取0-9随机数数组
const RandomIndices = computed(() => {
    const indices = new Set();
    while (indices.size < 9) {
        indices.add(Math.floor(Math.random() * data.value.length));
    }
    return Array.from(indices);
});
//点击翻牌效果
const theP1 = ref([]);
const theP2 = ref([]);
let timeId = null;
const handleClick = (index) => {
    console.log(index)
  // 访问特定的元素
  const p1Element = theP1.value[index];
  const p2Element = theP2.value[index];
  if (p1Element && p2Element) {
    // 进行操作
    p1Element.style.transform = 'rotateY(-180deg)';
    p2Element.style.transform = 'rotateY(0deg)';
  }
    timeId = setTimeout(() => {
        p1Element.style.transform = 'rotateY(0deg)';
        p2Element.style.transform = 'rotateY(180deg)';
    }, 3000);
};

onBeforeUnmount(() => {
    clearTimeout(timeId);
});
</script>

 <template>
    <div class="game">
        <ul>
            <li @click="handleClick(i)" v-for="(index,i) in RandomIndices" :key="index">
                <img :src="data[index].src1" class="p1"  :ref="el => theP1[i] = el" alt="">
                <img :src="data[index].src2" class="p2"  :ref="el => theP2[i] = el" alt="">
            </li>
        </ul>
     </div>
 </template>
 <style scoped lang="less">
*{
    list-style: none;
    margin: 0;
    padding: 0;
}
.game{
    background-image: url('../assets/images/bg.png'); /* 设置背景图 */
  background-size: cover; /* 背景图填充整个区域 */
  background-position: center; /* 背景图居中 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
    
    ul{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        li{
            width: 350px;
            height: 500px;
            // background-color: #df4949;
            margin-top: 20px;           
            position: relative;
            img{
                width: 100%;
                height: 100%;
                box-shadow: 5px 5px 10px rgb(0, 0, 0);
                position: absolute;
                backface-visibility: hidden;
                transition: 2s;
                transform-style: preserve-3d;
            }
            .p2{
                transform: rotateY(180deg);
            }
        }
    }
}
</style>
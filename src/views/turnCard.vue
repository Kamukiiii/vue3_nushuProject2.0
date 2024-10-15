<!-- 翻牌界面 -->
<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';
const data =ref([
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic2.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic3.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic4.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic5.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic6.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic7.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic8.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic9.png"},
        {src1:"../assets/images/pic1.jpg" ,src2 : "../assets/images/pic10.png"}
    ])
const RandomIndices = computed(()=>{
    const indices = new Set()
    while(indices.size<9){
        indices.add(Math.floor(Math.random()*data.value.length))
    }
    return Array.from(indices)
})
const p1 = ref(null)
const p2 = ref(null)
let timeId = null
const startTimer = () => {
    timeId = setTimeout(() => {
        p1.value.style.transform = 'rotateY(180deg)'
        p2.value.style.transform = 'rotateY(0deg)'
    }, 3000);
};
const handleClick = () => {
    p1.value.style.transform = 'rotateY(0deg)'
    p2.value.style.transform = 'rotateY(-180deg)'
    startTimer()
}
onBeforeUnmount(()=>{
    clearTimeout(timeId)
})
</script>

 <template>
    <div class="game">
        <ul>
             <li @click="handleClick" v-for="index in RandomIndices" :key="index">
                <img :src="data[index].src1" class="p1" ref="theP1" alt="">
                <img :src="data[index].src2" class="p2" ref="theP2" alt="">
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
    width: 1200px;
    height: 2000px;
    // background-color: pink;
    margin: 100px auto;
    
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
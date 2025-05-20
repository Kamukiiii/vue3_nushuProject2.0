<!-- 首页 -->
<script>
</script>
<template>
  <div>

    <div class="cards">
      <div class="card">热点</div>
      <div class="card">科普</div>
      <div class="card">趣味学习</div>
      <div class="card">
        <p>在2024年2月结束的卡塔尔多哈游泳世锦赛上，中国女子花样游泳队夺冠。赛后，花泳队的成员手持红纸，为全国人民送上了新年祝福，而红纸上面状似柳叶的“字符”，正是世界上唯一一种女性文字，江永女书。
          江永县位于湖南省南部边陲，四周群山环绕，鲜为人知，而女书，则更为神秘。作为一种由女性创造、只传授给女性使用、具有很强加密功能的文字，甚至曾经许多当地男子都不知道其存在。
          女书的创造者们不认识方块字，不具备世俗意义上的“识字”能力，但却成为了自己的仓颉，用女性密语记录下了珍贵的女性生命体验。在我们如火如荼地谈论女性主义的当下，女书的独特价值与历史，也许值得被更多人知晓。
        </p>
      </div>
      <div class="card"> <img src="../assets/images/indexpic1.jpg"></div>
      <div class="card">AI大模型</div>
      <div class="card">
        <p>
          一代代学界前辈的潜心研究与呵护，让女书得以不湮灭在历史长河之中。
          2004年，阳焕宜老人逝世，女书的最后一个自然传承人离开了。
          但是，女书并没有死亡，如今江永县委宣传部认定授牌了一些女书传人，她们具备认、写、说、唱女书的能力，将女书作为一项非物质文化遗产来传承下去。
        </p>
      </div>
      <div class="card">三月阳和沐煦风，中华妇女顶天荣</div>
      <div class="card"> <img src="../assets/images/indexpic2.jpg"></div>
      <div class="card"> <img src="../assets/images/indexpic3.jpg"></div>
      <div class="card">
        <p>
          女书是由女性创造并且在女性之间传播的特殊文字，文字外形呈现长菱形，笔画纤细均匀，似蚊似蚁，因此也被称之为“长脚文”或“蚂蚁字”。
          女书所有字符只有点、竖、斜、弧四种笔画，可采用当地方言土语吟诵或咏唱。
        </p>
      </div>
      <div class="card">天下妇女，姊妹一家</div>
      <div class="card">中华儿女多奇志</div>
      <div class="card"><img src="../assets/images/indexpic5.png"></div>
      <div class="card"><img src="../assets/images/indexpic4.jpg"></div>
      <div class="card">
        <p>女书有396个字，通过文字的排列组合，女性就能完整地讲述属于自己的故事。女书作品有自传、书信、民歌、祭祀、纪实、翻译等。
          在这些作品里，有大量诉苦的内容，她们将在生活里感受到的身为女性的苦书写、唱诵。右图为女书面料。</p>
      </div>
      <div class="card">不爱红装爱武装</div>
      <div class="card"><img src="../assets/images/indexpic6.jpg"></div>
      <div class="card"><img src="../assets/images/indexpic7.jpg"></div>
      <div class="card"><img src="../assets/images/indexpic9.jpg"></div>
      <div class="card">
        <p>
          女书作为同村女性之间秘密的通讯方式，传女不传男。女书除了书写，折扇和纸片以外，也会作为图案花纹绣在衣服、手帕或编织的花带上。于是，在成为非遗揭秘之前，一般男子只会把女书当成是普通的花纹。
          她们说，既然写男书的是君子，那我们就是君子女。
        </p>
      </div>
      <div class="card"><img src="../assets/images/indexpic12.jpg"></div>
      <div class="card">女书锦带</div>
      <div class="card"><img src="../assets/images/indexpic10.jpg" alt=""></div>
      <div class="card"> <img src="../assets/images/indexpic11.jpg"></div>
      <div class="card">女书艺术书</div>
      <div class="card">三朝书</div>
      <div class="card"> <img src="../assets/images/indexpic14.jpg" title="用樱花写的自由"></div>
      <div class="card"><p>女性们创造了女书<br>成为了自己的仓颉</p></div>
      <div class="card"> <img src="../assets/images/indexpic13.jpg"></div>
      <div class="card">
         <p>图源于网络<br>写网站的初衷是为了让更多人爱上女书，希望浏览完全站后的你会感受到女书这一非遗文化的魅力，体会蕴含其中的力量。</p>
      </div>
    </div>

  </div>
</template>

<style lang="css">
/* 你的样式 */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-block-size: 100%;
  display: grid;
  place-content: center;
  /* 设置上下内边距为 30% 视口高度 */
  padding-block: 80px;
  background: #ebeddf;
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    box-shadow: none;
    transform: scale(.8) translateY(15vh);
  }
}

.cards {
  display: grid;
  gap: 2rem;
  /* 自动排列 */
  grid-auto-flow: dense;
  grid-template-columns: repeat(4, 30ch);
}

.card {
  animation: slide-fade-in both;
  /* 使用浏览器的视图时间线,允许动画根据视口的变化进行同步 */
  animation-timeline: view();
  /* 定义动画时间范围 */
  animation-range: contain 0% contain 50%;
  border-radius: 10px;
  line-height: 6;
  box-shadow: 0px 8px 20px #00000022;
  font-size: 32px;
  letter-spacing: 5px;
  color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(60deg, #dfd6b8 0%,#bfc1a9,#b3bda9 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-size: 20px;
    line-height: 2;
    padding-left: 5px;
  }
}
.card img {
  width: 100%;
  height: 100%;
}

.card:nth-of-type(4n) {
  grid-column: span 2;
}

.card:nth-of-type(5n) {
  grid-column: span 2;
}

.card:nth-of-type(7n) {
  grid-row: span 2;
}
</style>

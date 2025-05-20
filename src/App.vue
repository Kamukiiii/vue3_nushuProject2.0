<script setup>
import { RouterLink } from 'vue-router'
(function (d, t) {
  var BASE_URL = "https://app.chatwoot.com";
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: 'ghrC6HLiZQrNRiZxh9ix4xQn',
      baseUrl: BASE_URL
    })
  }
})(document, "script");
</script>

<template>
  <div id="app">
    <div class="nav">
      <a>
        <RouterLink to="/" active-class="active">首页</RouterLink>
      </a>
      <a>
        <RouterLink to="/knowledge" active-class="active">科普</RouterLink>
      </a>
      <a>
        <RouterLink to="/interact" active-class="active">趣学</RouterLink>
      </a>
      <a>
        <RouterLink to="/game" active-class="active">游戏</RouterLink>
      </a>
      <a>
        <RouterLink to="/gpt" active-class="active">大模型</RouterLink>
      </a>
      <a>
        <RouterLink to="/recognition" active-class="active">文字识别</RouterLink>
      </a>
      <a href="https://nushuscript.org/unicode/" target="_blank">更多</a>
    </div>
    <RouterView />
  </div>
</template>

<style scoped lang="less">
.nav {
  padding: 20px;
  position: absolute;
  z-index: 999;
  position: fixed;
  left: -70px;
  top: 20%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  background: #b3bda9;
  height: 500px;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    transform: translateX(70px);
  }

  a {
    text-decoration: none;
    padding-top: 20px;
    color: #756c4b;
  }

  .active {
    color: #eae4d1;
    text-decoration: inline;
    border-bottom: 2px solid #75674b;
  }
}
</style>

<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <div class="nav">
        <a><RouterLink to="/" active-class="active">首页</RouterLink></a>
        <a><RouterLink to="/knowledge" active-class="active">科普</RouterLink></a>
        <a><RouterLink to="/interact" active-class="active">交互</RouterLink></a>
        <a><RouterLink to="/game" active-class="active">游戏</RouterLink></a>
        <a href="https://nushuscript.org/unicode/" target="_blank">更多</a>
    </div>
  <RouterView />
  </div>
</template>

<style scoped lang="less">
  .nav{
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
    &:hover{
      transform: translateX(70px);
    }
    a{
      text-decoration: none;
      padding-top: 20px;
      color: #756c4b;
    }
    .active{
      color: #eae4d1;
      text-decoration: inline;
      border-bottom: 2px solid #75674b;
    }
  }
</style>

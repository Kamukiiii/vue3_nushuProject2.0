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
    background: rgb(151, 230, 206);
    height: 500px;
    border-radius: 10px;
    transition: all 0.5s;
    &:hover{
      transform: translateX(70px);
    }
    a{
      text-decoration: none;
      padding-top: 20px;
      color: rgb(220, 185, 138);
    }
    .active{
      color: blue;
      text-decoration: inline;
      border-bottom: 2px solid red;
    }
  }
</style>

<!-- 交互界面 -->
  <script setup></script>

 <template>
    <body>
      <div class="shell">
         <div class="box">
               <img src="../assets/images/尊重.png">
               <span>尊重</span>
         </div>
         <div class="box">
               <img src="../assets/images/平等.png">
               <span>平等</span>
         </div>
         <div class="box">
               <img src="../assets/images/乐观.png">
            <span>乐观</span>
         </div>
         <div class="box">
               <img src="../assets/images/希望.png">
               <span>希望</span>
         </div>
         <div class="box">
               <img src="../assets/images/坚韧.png">
               <span>坚韧</span>
         </div>
         <div class="box">
               <img src="../assets/images/高尚.png">
               <span>高尚</span>
         </div>
      </div> 
   </body>
 </template>

 <style scoped lang="css">
  * {
      padding: 0;
      margin: 0;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: url(../assets/images/bg.png) no-repeat;
      background-size:cover;
      position: relative;
  }

  .shell {
      width: 90%;
      height: 700px;
      display: flex;
      
  }

  .box {
      flex: 1;
      overflow: hidden;
      transition: .5s;
      margin: 0 20px;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
      border-radius: 20px;
      border: 10px solid #fff;
      background-color: #f2ede3;
  }

  .box>img {
      width: 200%;
      height: 85%;
      object-fit: cover;
      transition: .5s;
  }

  .box>span {
      font: 200 45px '优设标题黑';
      text-align: center;
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .box:hover {
      flex-basis: 30%;
  }

  .box:hover>img {
      width: 100%;
      height: 100%;
  }
  /* more */
  .more{
    position: absolute;
    color: #fff !important;
    right: 15px;
    top: 20px;
  }
</style>
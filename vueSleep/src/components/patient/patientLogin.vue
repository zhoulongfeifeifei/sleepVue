<template>
  <div id="container">
      <div class="phone">
        <img src="../imgs/login_phone.png" alt="" /><input type="number" class="Iphone"  placeholder="请输入手机号" value/>
      </div>
      <div class="code">
        <img src="../imgs/login_verify.png" alt="" /><input type="text" class="postCode" placeholder="请输入验证码"/><span class="aline"></span>
        <button class="getCode">获取验证码</button>
      </div>
	    <mt-button size="normal" type="primary" @click="login()">small</mt-button>  
  </div>
</template>
 <script>
   export default{
     name:'patientLogin',
     data(){
       return {
       }
     },
     methods:{
        login(){
          // this.$router.push({name:'patientIndex',params:{id:123,dataId:122222}})
          // this.$router.push('/index')
          this.$router.push({name:'index',query:{id:123,type:'patientIndex'}})
        }
     }
   }
 </script>
<style>
@import url("../css/common.css");
  #container{
    width: 100%;
    display: flex;
    flex-direction: column;
    height:100%;
  }
  .phone,.code{
    width: 92%;
    height: 13.13vw;
    border-radius: 8px ; 
    border: 1px solid #a9aaad;
    margin: 0 auto;
    flex-direction: row;
      align-items: center;
    display: flex;
    font-size: 7.4vw;
  }
  .phone{
    margin-top: 18.6vw;
  }
  .code{
    margin-top: 5.67vw;
  }
  .aline{
    width: 1px;
    height: 8.0vw;
    background-color: #a9aaad;
    margin-right: 2.33vw;
  }
  .getCode{
    color: #78A7EF;
  }
  .submit{
    width: 92%;
    height: 13.13vw;
    background-color:#78A7EF ;
    display: block;
    color: #fff;
    font-size: 4.3vw;
    margin: 5.6vw auto;
    border-radius: 8px;
  }
  .mint-button--normal{
    margin-top: 6.0vw;
  }
</style>


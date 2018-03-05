<template>
  <div id="container">
      <header>
        <img src="../imgs/user_pic_yuan@1x.png" class="photoHeade" alt="" @click="myProfile()"/>
        <div class="userInfo">
          <spna class="userName">张三</spna>
          <span class="userSex">男 18岁</span>
        </div>
		</header>
    <nav></nav>
		<section>
			<ul class="userList">
				<li class="zixun">
					<div class="uesrLeft"><img src="../imgs/mine_quiz@1x.png"/><span>我的咨询</span></div>
					<div class="uesrRight"><span>0</span><img src="../imgs/mine_next@1x.png" alt="" /></div>
				</li>
				<li class="recode">
					<div class="uesrLeft"><img src="../imgs/mine_list@1x.png"/><span>付款记录</span></div>
					<div class="uesrRight"><img src="../imgs/mine_next@1x.png" alt="" /></div>
				</li>
				<li class="lastLi">
					<div class="uesrLeft"><img src="../imgs/mine_list@1x.png"/><span>退出登录</span></div>
					<div class="uesrRight"><img src="../imgs/mine_next@1x.png" alt="" /></div>
				</li>
			</ul>
		</section>
  </div>
</template>
<script>
  export default{
     name:'mine',
     data(){
       return {
       }
     },
     methods:{
        myProfile(){
          this.$router.push({name:'myProfile',query:{userId:'1111',tyle:'2'}})
        }
     }
   }
</script>
<style>
  #container{
	width: 100%;
	display: flex;
	flex-direction: column;
	height:100%;
	background: #F1F1F1;
}
header{
	background: #fff;
}
.photoHeade{
	display: block;
	width: 18.13vw;
	height: 18.13vw;
	margin: 0 auto;
	margin-top: 5.6vw;
	border-radius: 50%;
}
.userInfo{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 4.0vw;
	padding: 3.8vw 0;
}
.userInfo .userName{
	color: #78A7EF;
}
.userInfo .userSex{
	color: #A9AAAD;
	margin-top: 1.5vw;
}
nav{
	width: 100%;
	height: 3.8vw;
}
.userList{
	width: 100%;
    font-size: 3.47vw;
    color: #2D2D2D;
}
.userList li{
	padding: 3.0vw 4.4vw;
    border-bottom: 1px solid #999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.userList li div{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.uesrRight span{
	color: #FFFFFF;
	background: #FF6978;
	width: 5.0vw;
	height: 5.0vw;
	border-radius: 50%;
	text-align: center;
}
.userList .lastLi{
	margin-top: 3.8vw;
}
</style>


<template>
  <div id="container">
		<header></header>
		<section>
	 		<ul class="list">
	 		<li>
	 			<img class="doctorPhoto" src="../imgs/user_pic_yuanjiao@1x.png" alt="" />
				<div class="doctorInfo">
					<p class="doctorDetial doctorSty"><span class="doctorName">张三</span><span>产科</span><span>主治医师</span></p>
					<p class="hospital">杭州市中医院</p>
					<p class="hospital doctorDetial"><span><span class="doctorName">1526</span><span>回答</span></span><span><span>服务积分：</span><span class="jifen">94</span></span></p>
				</div>
	 		</li>
		</ul>
		</section>
		 
	</div>
</template>
<style>
@import url("../css/common.css");
#container{
	width: 100%;
	display: flex;
	flex-direction: column;
	height:100%;
	background: #fff;
}
section{
	overflow-y: scroll;
	margin-bottom: 13.33vw;
}
.list{
	width: 100%;
	overflow-y: scroll;
}
.list li{
	width: 92%;
	height: auto;
	padding: 3.0vw 4%;
	display: flex;
	flex-direction: row;
	font-size: 3.47vw;
	color: #999;
	border-bottom: 1px solid #F1F1F1;
}
.doctorInfo{
	width: 55%;
	display: flex; 
	flex-direction: column;
	align-content: space-around;
	justify-content: flex-start;
	margin-left: 5.0vw;
}
.hospital{
	margin-top: 2.0vw;
}
.doctorDetial{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.doctorPhoto{
	width: 10.93vw;
	height: 10.93vw;
}
.doctorName{
	color: #2D2D2D;
	font-size: 4.0vw;
}
.doctorInfo .doctorSty{
	width: 83%;
}
.jifen{
	color: #FEC173;
}

</style>

<template>
  <div class="patientIndex">      
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">免费咨询</mt-tab-item>
            <mt-tab-item id="2">悬赏咨询</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="fastConsult" id="fastConsult" type="0">
                    <div class="leftConsult"><img src="../imgs/free_quiz.png" alt="" /><span>快速提问</span></div> 
                    <img class="next" src="../imgs/next.png" alt="" />
                </div>
                 <section>
                    <ul>
                        <li v-for="item in itemList" @click="toTopic(item.id)">
                            <p>{{item.title}}</p>
                            <div class="qusition">
                                <span>{{item.quest}}</span>
                                <div class="timer">
                                    <span>{{item.time}}</span>
                                    <img src="../imgs/free_comment@1x.png" alt="" /><span class="number">{{item.num}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="fastConsult" id="xuanConsoult" type="1">
                    <div class="leftConsult"><img src="../imgs/free_quiz.png" alt="" /><span>悬赏询问</span></div> 
                    <img class="next" src="../imgs/next.png" alt="" />
                </div>
                <section>
                    <ul>
                        <li v-for="item in moneyList" @click="toAnthon(item.id)">
                            <p> <span class="xuanMoney">{{item.money}}</span>{{item.title}}</p>
                                <div class="qusition">
                                    <span>{{item.quest}}</span>
                                    <div class="timer">
                                        <span>{{item.time}}</span>
                                        <img src="../imgs/free_comment@1x.png" alt="" />
                                        <span class="number">{{item.num}}</span>
                                    </div>
                                </div>   
                        </li>                          
                    </ul>
                </section>
            </mt-tab-container-item>
        </mt-tab-container>
  </div>
</template>
<script>
 
export default{
    data(){
        return {
            selected:'1',
            itemList:[
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'0',id:0},
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'1',id:1},
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'2',id:2},
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'3',id:3},
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'2',id:2},
                {title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'3',id:3}
            ],
            moneyList:[
                {money:'悬赏10元',title:'医生你好，我脸上一直有痘痘，此起披伏的，一擦脸会更多，不知道会有没有好的建议',quest:'已回答',time:'2017-05-17',num:'0',id:0}
            ]
        }
    }, 
    methods:{
        toTopic(params){
            console.log(params)
            // this.$router.push('/topic?'+dealurl(params))
        },
        toAnthon(params){
            console.log(params)
        }
    },
    mounted(){
        console.log(this.$route.query.dataId)
    }
}
</script>
<style>
@import url("../css/common.css");
body,html{
	width: 100%;
	height: 100%;
	background-color: #F1F1F1;
	box-sizing: border-box;
}
.patientIndex{
    display: flex;
	flex-direction: column;
	height:100%;
}
.fastConsult{
	width: 91%;
	height: 18.67vw;
	display: flex;
	flex-direction: row;
	font-size: 4.53vw;
	color: #2E323A;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
}
.leftConsult{
	display: flex;
	flex-direction: row;
	align-items: center;
}
section{
	width: 100%;	 
	background-color: #fff;
	font-size: 3.47vw;
	overflow-y: scroll;
}
section ul li{
	padding: 3.0vw 4.4vw;
	border-bottom:1px solid #999;
}
section ul li p{
	line-height: 8.0vw;
	font-size: 4.0vw;
	color: #2D2D2D;
}
section ul li p .xuanMoney{
	font-size: 3.2vw;
	color: #fff;
	background: #000000;
	padding: 2px;
	margin-right: 4px;
    background: -moz-linear-gradient(left,  #FEC173 0%, #FE8753 100%);
    background: -webkit-gradient(linear, left, right, color-stop(0%,#FEC173), color-stop(100%,#FE8753));
    background: -webkit-linear-gradient(left,  #FEC173 0%,#FE8753 100%);
    background: -o-linear-gradient(left,  #FEC173 0%, #FE8753 100%);
    background: -ms-linear-gradient(left,  #FEC173 0%, #FE8753 100%);
    background: linear-gradient(to right,  #FEC173 0%, #FE8753 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FEC173', endColorstr='#FE8753',GradientType=0 );
    border-radius: 5px;
}
.qusition{
	width: 100%;
	height: 8.0vw;
	display: flex;
	flex-direction: row;
	align-content: center;
	line-height: 8.0vw;
	justify-content: space-between;
	color: #A9AAAD;
}
.timer{
	display: flex;
	flex-direction: row;
	justify-content: center;
}
section ul li .qusition .number{
	color: #78A7EF;
}
</style>


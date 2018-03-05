<template>
  <div class="index">
       <mt-tab-container v-model="selected">
            <mt-tab-container-item id="patientIndex">
                <v-patientIndex></v-patientIndex>
            </mt-tab-container-item>
            <mt-tab-container-item id="expertsBar">
                <v-expertsBar></v-expertsBar>
            </mt-tab-container-item>
            <mt-tab-container-item id="mine">
                 <v-mine></v-mine>
            </mt-tab-container-item>
        </mt-tab-container>
      <mt-tabbar v-model="selected">
        <mt-tab-item v-for="item in footer" :id='item.id' @click="cesi">
            <img slot="icon" :src="item.src">
            {{item.title}}
        </mt-tab-item>
       </mt-tabbar>
  </div>
</template>
<script>
import patientIndex from '@/components/patient/patientIndex'
import mine from '@/components/mine/mine.vue'
import expertsBar from '@/components/expertsBar/expertsBar.vue'
export default{
    name:'patientIndex',
    data(){
        return {
            footer:[
                {src:'imgs/tab_quiz_normal@1x.png',title:'问题页面',id:"patientIndex"},
                {src:'imgs/tab_zhuanjia_normal@1x.png',title:'专家栏',id:"expertsBar"},
                {src:'imgs/tab_mine_normal@1x.png',title:'我的',id:"mine"},
            ],
            selected: "patientIndex",            
        }
    },      
    components: {
        'v-patientIndex': patientIndex,
        'v-mine': mine,
        'v-expertsBar': expertsBar
    },
    methods:{
        cesi(option){
            console.log(111111)
        }
    },
    mounted(){
          if(this.$route.query.type){
             this.selected=this.$route.query.type
         }
        console.log(this.$route.query.dataId)
    }
}
</script>
<style>
.mint-tabbar{
    position: fixed;
}
</style>


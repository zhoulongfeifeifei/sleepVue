<template>
  <div id="container">
        <mt-field label="姓名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="身份证号" placeholder="请输入身份证号" v-model="identy"></mt-field>
        <mt-field label="性别" placeholder="请输入性别" v-model="sex"></mt-field>
        <mt-field label="年龄" placeholder="请输入年龄" type="number" v-model="number"></mt-field>
        <mt-field label="病史" placeholder="请输入病史" type="textarea" v-model="bings"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
        <mt-field label="银行卡" placeholder="请输入银行卡" type="number" v-model="card"></mt-field>
        <mt-button size="normal" type="primary" @click="save">保存</mt-button>
	</div>
</template>
<script>
    export default{
        data(){
            return{
                username:'周龙飞',
                identy:'xxxxxxxxxxxxxxxxxx',
                sex:'男',
                number:24,
                bings:'无',
                phone:'15625822555',
                card:'62122333333333333'
            }
        },
        methods:{
            save(){
                this.$router.push({name:'index',query:{type:'mine'}})
            }
        }
    }
</script>
<style>
</style>


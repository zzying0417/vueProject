<template>
<div class='login-wrap'>
    
    <el-form label-position="top" label-width="80px" :model="formData" class='form-login'>
  <h2>用户登录</h2>
  <el-form-item label="用户名字">
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formData.password"></el-input>
  </el-form-item>
  <el-button  @click.prevent='getUsersList()' type="primary" class="login-btn">登录</el-button>
  
</el-form>
</div>
   
</template>

<script>
export default {
    data(){
        return {
            formData:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        async getUsersList(){

            //用asy..在外面获取结果
            const res = await this.$http.post('login',this.formData);
                console.log(res);
                const {
                    meta:{msg,status},
                    data
                } = res.data
                if(status===200){

                    const token = localStorage.setItem('token',data.token)
                    this.$router.push({name:'home'});
                    this.$message.success(msg);
                }else{
                    this.$message.warning(msg);
                }


            //不想再异步操作AJAX。then内部获取到异步操作的结果
            // this.$http.post('login',this.formData)
            // .then(res=>{
            //     //console.log(res);
            //     const {
            //         meta:{msg,status},
            //         data
            //     } = res.data
            //     if(status===200){
            //         this.$router.push({name:'home'});
            //         this.$message.success(msg);
            //     }else{
            //         this.$message.warning(msg);
            //     }
            // })
        }
    }
}
</script>

<style>
.login-wrap{
    height: 100%;
    background-color: #324152;
    display:flex;
    justify-content: center;
    align-items: center;
}
.form-login{
    background-color: #fff;
    width: 400px;
    border-radius: 6px;
    padding: 30px;
    
}
.login-btn{
    width: 100%;
}

</style>

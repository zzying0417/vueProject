<template>
<div class='login-wrap'>
    
    <el-form label-position="top" label-width="80px" :model="formData" class='form-login'>
  <h2>用户登录</h2>
  <el-form-item label="用户名字">
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formData.username"></el-input>
  </el-form-item>
  <el-button type="primary" class="login-btn">登录</el-button>
  
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

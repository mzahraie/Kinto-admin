<template>
    <div>
        <el-card>
            <div slot="header" class="clearfix">
              <h2>Account credentials</h2>
            </div>
  <div>
      <el-form ref="user" :model="user" label-width="120px" :rules="rules">
        <el-form-item label="Username" prop="username">
            <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login('user')">Sign in</el-button>
        </el-form-item>
      </el-form>
  </div>
</el-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data(){
        return {
            user: {
                 username: '',
                 password: ''    
            },
            rules: {
                username: [
                    { required: true, message: 'Please input username', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' }
                ],
                   
        }
    }
    },
    created () {
        axios.get('/accounts')
         .then(res => {
             const data = res.data
             const users = []
             for(let key in data) {
                 const userr = data[key]
                 userr.id = key
                 users.push(userr)
             }
            //  user.username = users[0].username
            //  user.password = users[0].password
         })
    },
    methods: { 
        login(formName) {

            this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
                // if(this.input.username != "" && this.input.password != "") {
                //     if(this.user.username == this.res.users[0].username && this.user.password == this.res.users[0].password) {
                //         this.$emit("authenticated", true);
                //         this.$router.replace({ name: "home" });
                //     } else {
                //         alert("The username and / or password is incorrect");
                //     }
                // } else {
                //     alert("A username and password must be present");
                // }
            }
    }
}
</script>
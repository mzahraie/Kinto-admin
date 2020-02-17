<template>
  <el-container id="app">
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside width="310px">
        <Sidebar ></Sidebar>
      </el-aside>
      <el-main>
        <router-view>
        
        </router-view>
                  
      </el-main>
    </el-container>
    <el-footer class="footer" >  
          <el-link type="primary" href="https://github.com/Kinto/kinto-admin" target="_blank">
            Powered by Masoom
          </el-link>
    </el-footer>
  </el-container>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
export default {
  data() {
            return {
            //  buckets: [
            //     'default'
            //     ],
                authenticated: false
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "home" });
            }
        },
        methods: {
            setAuthenticated() {
                this.authenticated = true;
            },
            logout() {
                this.authenticated = false;
            }
        },
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
.footer {
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>

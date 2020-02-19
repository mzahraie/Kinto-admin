<template>
  <div>
    <h1>Create a new bucket</h1>
    <el-card shadow="never">
      <el-form>
        <el-form-item label="Bucket id" required>
          <el-input v-model="bucketId"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-check"
            @click.prevent="createNewBucket"
          >
            Create bucket</el-button
          >
          or
          <router-link to="/">
            <el-button type="text">Cancel</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { bus } from "../../main.js";
import axios from "axios";

export default {
  data() {
    return {
      bucketId: ""
    };
  },
  props: ["buckets"],
  methods: {
    createNewBucket() {
      console.log("Creating bucket: " + this.bucketId);
      bus.$emit("bucketAdded", this.bucketId);
      axios({
        method: "post",
        auth: {
          username: "admin",
          password: "123456aA"
        },
        url: "http://localhost:8888/v1/buckets",
        data: {
          data:{
              id: this.bucketId
          } 
        }
      });
      this.bucketId = "";
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 18px;
}
</style>

<template>
    <div>
        <h1>Create a new collection in ... bucket</h1>
        <el-card shadow="never">
            <el-form>
                <el-form-item label="Collection id" required>
                <el-input v-model="collectionId"></el-input>
                </el-form-item>
                <el-form-item>
                <el-button
                    type="primary"
                    icon="el-icon-check"
                    @click.prevent="createNewCollection"
                >
                    Create collection</el-button
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
export default {
    data(){
        return{
            collectionId: ""
        };
    },
    props: bucketId,
    methods: {
        createNewCollection(){
            console.log("Creating collection: " + this.collectionId);
            axios({
                method: "post",
                auth: {
                username: "admin",
                password: "123456aA"
                },
                url: "http://localhost:8888/v1/buckets/" + this.bucketId + "/collections",
                data: {
                data:{
                    id: this.bucketId
                } 
        }
      });
        }
    }
}
</script>
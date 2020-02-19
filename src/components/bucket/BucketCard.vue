<template>
    <el-card shadow="hover" class="card">
        <div slot="header" class="clearfix">
            <span><i class="el-icon-folder-opened"></i> <strong><slot></slot></strong> bucket </span>
            <router-link :to="'/create/bucket/' + $route.params.bucketId ">
            <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-s-tools"></i></el-button>
            </router-link>
        </div>
        <div>
            <router-link :to="'/create/collections/' + $route.params.bucketId " tag="a">
            <el-button style="width: 100%" type="text"><i class="el-icon-plus"></i>  Create collection</el-button>
            </router-link> 
        </div>
    </el-card>
</template>

<script>
export default {
    data(){
        return{
            bucketId: this.$route.params.bucketId
        };
    },
    props: ['bucket']
    // methods: {
    //     navigateToBucketAttr(){
    //         this.$router.push('/create/bucket' + this.$route.params.bucketId)
    //     }
    // }
}
</script>

<style scoped>
    
    .el-button {
        text-align: left;
    }

    .card {
        border: 1px solid rgb(223, 221, 221);
    }
</style>



<template>
    <div>
        <h1>Edit {{bucketId}} bucket attributes</h1>
        <el-tabs type="border-card">
            <el-tab-pane label="Collections"></el-tab-pane>
            <el-tab-pane label="Groups"></el-tab-pane>
            <el-tab-pane label="Attributes"></el-tab-pane>
            <el-tab-pane label="Permissions"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    data(){
        return {
            bucketId: this.$route.params.bucketId
        }
    }
}
</script>
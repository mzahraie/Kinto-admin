<template>
    <div class="header">
        <el-header>
            <el-row justify="space-between">
                <el-col :span="6">
                <h3>Kinto</h3>
                </el-col>
                <el-col :span="18">
                    <div style="float: right">
                    <span>Connected as <strong>account:...</strong> on <strong>...</strong></span>

                    <el-link 
                    href="https://docs.kinto-storage.org/en/stable/"
                    target="_blank"
                    :underline="false" class="marginx">
                        <el-button icon="el-icon-question" size="small">Documentation</el-button>
                    </el-link>

                    
                    <router-link to="/Login" tag="a">
                        <el-button  type="primary" size="small">Logout</el-button>
                    </router-link>
                    
                    </div>
                </el-col>
            </el-row>
            
        </el-header>
    </div>
</template>
<style scoped>
    .header {
        background-color: #24292e;
        color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: .2em 1.15em;
        z-index: 999;
    }

    .marginx {
        margin-left: 5px;
        margin-right: 5px;
    }

 
</style>
<template>
    <div class="sidebar"> 
        <el-row class="home">
            <el-col>
                <router-link to="/" tag="a">
                    <el-button style="width: 100%">Home<i class="el-icon-refresh" style="float: right; padding: 3px 0"></i></el-button>
                </router-link> 
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <router-link to="/create/bucket" tag="a">
                    <el-button style="width: 100%"><i class="el-icon-plus"></i>  Create bucket</el-button>
                </router-link> 
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                 <BucketCard 
                    style="width: 99%; margin-bottom: 18px" 
                    v-for="bucket in buckets" :key="bucket"
                    >
                    <!-- :bucket="bucket"> -->
                    {{bucket}}
                </BucketCard>
            </el-col>
            <p v-for="bucket in buckets" :key="bucket">{{bucket}}</p>
        </el-row>
    </div>
</template>

<script>
// import BucketCard from './bucket/BucketCard';
// import Bucket from './bucket/Bucket';
import {bus} from '../main';

export default {
    data(){
        return {
            buckets: [
                'default'
                ]
        }
    },
//     props: ['buckets'],
    created (){
        bus.$on('bucketAdded', (data) => {
        this.buckets.push(data);
        })
  },
    // methods: {
    //     addBucket(bucketId){
    //         this.buckets.push(bucketId);
    //     }
    // },
    // components: {
    //     BucketCard
    // }
}
</script>

<style scoped>
    
    .el-row {
        margin-bottom: 20px;
    }

    .home {
        margin-top: 20px;
    }

    .el-button {
        text-align: left;
    }
</style>

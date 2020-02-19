import Home from './components/Home.vue';
import Bucket from './components/bucket/Bucket.vue';
import BucketAttribute from './components/bucket/BucketAttribute.vue'
import Collection from './components/collection/Collection.vue';
import Login from './components/Login.vue'


export const routes = [
    {   
        path: '/', 
        component: Home
    },
    
    {   
        path: '/create/bucket',
        component: Bucket
    },

    {   
        path: '/create/bucket/:bucketId',
        component: BucketAttribute
    },

    {   
        path: '/create/collections/:bucketId', 
        component: Collection 
        // children: [
        // {path: ':collectionId', component: CollectionAttribute}
        // ]
    },

    {   
        path: '/login', 
        component: Login
    }
]

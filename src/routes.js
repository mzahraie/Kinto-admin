import Home from './components/Home.vue';
import Bucket from './components/bucket/Bucket.vue';
import Collection from './components/collection/Collection.vue';
import Login from './components/Login.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/create/bucket', component: Bucket},
    {path: '/create/collection', component: Collection},
    {path: '/login', component: Login}
]

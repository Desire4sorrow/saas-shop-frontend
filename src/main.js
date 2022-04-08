import * as Vue from 'vue'
import * as Router from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios'

import App from './App.vue'
import {routes} from './router'
import 'bootstrap/dist/js/bootstrap.bundle'

const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes,
})

Vue.createApp(App).use(router, VueAxios, axios).mount('#app')

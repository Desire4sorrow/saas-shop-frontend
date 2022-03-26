import * as Vue from 'vue'
import * as Router from 'vue-router'

import App from './App.vue'
import {routes} from './router'
import 'bootstrap/dist/js/bootstrap.bundle'

const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes,
})

Vue.createApp(App).use(router).mount('#app')

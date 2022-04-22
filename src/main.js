import * as Vue from 'vue'
import * as Router from 'vue-router'
import Keycloak from 'keycloak-js'

import App from './App.vue'
import {routes} from './router'
import 'bootstrap/dist/js/bootstrap.bundle'

const router = Router.createRouter({
    history: Router.createWebHashHistory(),
    routes,
})

let initOptions = {
    url: (location.host === 'testvm.plotpad.ru') ? 'https://testvm.plotpad.ru:8443' : 'http://localhost:8080',
    realm: 'saas-shop',
    clientId: 'saas-shop-client',
    onLoad: 'login-required',
    checkLoginIframe: false,
}

let keycloak = Keycloak(initOptions);

keycloak.init({onLoad: initOptions.onLoad})
    .then(auth => {
    if (!auth) {
        window.location.reload()
        console.log('!auth')
    } else {
        //console.log('Auth')
        const app = Vue.createApp(App)
        app.provide('$keycloak', keycloak)

        app.use(router)
        app.mount('#app')
    }

    /*setInterval(() => {
        keycloak.updateToken(70)
                .then((refreshed) => {
                    console.log(refreshed)
                    if (refreshed) {
                        Vue.$log.info('Token refreshed' + refreshed);
                    } else {
                        Vue.$log.warn('Token not refreshed, valid for '
                            + Math.round(keycloak.tokenParsed.exp
                            + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                    }
                }).catch(() => {
                    console.error('Failed to refresh token')
                    Vue.$log.error('Failed to refresh token');
                });
    }, 6000)*/

    }).catch((error) => {
        console.log(error)
    });



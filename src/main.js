import * as Vue from 'vue'
import * as Router from 'vue-router'
import axios from 'axios';
import VueAxios from 'vue-axios'
import Keycloak from 'keycloak-js'

import App from './App.vue'
import {routes} from './router'
import 'bootstrap/dist/js/bootstrap.bundle'

const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes,
})

Vue.createApp(App).use(router, VueAxios, axios).mount('#app')

let initOptions = {
    url : (location.host === 'localhost:4000') ? 'https://localhost:8080/' : 'https://testvm.plotpad.ru:8443/',
    realm : 'saas-shop',
    clientId : 'saas-shop-client',
    onLoad  : 'login-required',
    checkLoginIframe: false
  }

  let keycloak = Keycloak(initOptions);

keycloak.init({onLoad: initOptions.onLoad}).then( auth => {
    if (!auth) {
      window.location.reload();
    } else {

      new Vue({
        render: h => h(App, { props : {keycloak: keycloak}}),
      }).$mount('#app')
    }

     setInterval(() => {
      keycloak.updateToken(70).then((refreshed) => {
        if (refreshed) {
          Vue.$log.info('Token refreshed' + refreshed);
        } else {
          Vue.$log.warn('Token not refreshed, valid for '
            + Math.round(keycloak.tokenParsed.exp
            + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).catch(() => {
        Vue.$log.error('Failed to refresh token');
      });
    }, 6000)

    }).catch(() => {
    Vue.$log.error("Authenticated Failed");
});

Vue.provide('$keycloak', keycloak)
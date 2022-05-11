import * as Vue from 'vue'
import * as Router from 'vue-router'
import Keycloak from 'keycloak-js'
import Notifications from '@kyvg/vue3-notification'
import { notify } from "@kyvg/vue3-notification";

import App from './App.vue'
import { routes } from './router'
import 'bootstrap/dist/js/bootstrap.bundle'

import { HTTP } from "@/config";
let qs = require("qs");

const router = Router.createRouter({
  history: Router.createWebHashHistory(),
  routes,
})

class OrderApi {
  constructor(keycloak) {
    this.keycloak = keycloak
  }

  post(method, data, successFn, errorFn = null) {
    HTTP.post('/' + method, qs.stringify(data), {
      headers: {
        authorization: "Bearer " + this.keycloak.token,
      },
    })
      .then((res) => {
        successFn(res.data);
      })
      .catch((error) => {
        if (errorFn) {
          errorFn(error);
        } else {
          var text
          if ('error' in error.response.data) {
            text = error.response.data.error
          } else {
            text = 'Неизвестная ошибка'
          }
          notify({
            title: 'Ошибка',
            text,
            type: 'error',
          });
        }
      });
  }
}

function initVueApp(keycloak) {
  const app = Vue.createApp(App)
  app.provide('$keycloak', keycloak)
  app.provide('$orderApi', new OrderApi(keycloak))
  app.use(router)
  app.use(Notifications)
  app.mount('#app')
}

console.log(process.env)

  let initOptions = {
    url: process.env.VUE_APP_SERVICE_CLIENT_URL || 'http://localhost:8443',  //(location.host === 'testvm.plotpad.ru') ? 'https://testvm.plotpad.ru:8443' : 'http://localhost:8443',
    realm: 'saas-shop',
    clientId: process.env.VUE_APP_SERVICE_CLIENT_CLIENT_ID || 'saas-shop-client',
    onLoad: 'login-required',
    checkLoginIframe: false,
  }

  let keycloak = Keycloak(initOptions);

  keycloak.init({ onLoad: initOptions.onLoad })
    .then(auth => {
      if (!auth) {
        window.location.reload()
        console.log('!auth')
      } else {
        initVueApp(keycloak)
      }

      setInterval(() => {
        keycloak.updateToken(70).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }, 60000)

    }).catch((error) => {
      console.log(error)
    });

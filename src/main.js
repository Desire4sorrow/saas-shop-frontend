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

if (process.env.NODE_ENV === "development") {
  initVueApp({
    token: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoMDBoOWE3ZEtNVVJrdUJJVXZlb1d5OVIwNlprSjZuYzNjbzVoMzIyWkZVIn0.eyJleHAiOjE2NDk4NzEyNDEsImlhdCI6MTY0OTg3MDk0MSwiYXV0aF90aW1lIjoxNjQ5ODcwOTIyLCJqdGkiOiI2MWQ4YmJkMy0zYmM5LTQ3MjAtYTZhZS05MGFjZDk4ODllM2MiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3NhYXMtc2hvcCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMDQ0Y2QyZS1jYjdmLTRhOGQtOTA3ZC0yNTgwYTQyMjA3YTEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzYWFzLXNob3AtY2xpZW50Iiwibm9uY2UiOiI4ZjRiNWFlMy1lZDhhLTQ5MTMtOTAzMC1kN2YzMDdkMGViMjEiLCJzZXNzaW9uX3N0YXRlIjoiYWU4NGQ4MTUtZmQzYS00MTc5LThlN2YtNjY3ZDE0NThmNzRhIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXNhYXMtc2hvcCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJhZTg0ZDgxNS1mZDNhLTQxNzktOGU3Zi02NjdkMTQ1OGY3NGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLQkNC70LXQutGB0LDQvdC00YAg0KDRi9Cx0LDQutC-0LIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYXNrYV9yeWJAbWFpbC5ydSIsImdpdmVuX25hbWUiOiLQkNC70LXQutGB0LDQvdC00YAiLCJmYW1pbHlfbmFtZSI6ItCg0YvQsdCw0LrQvtCyIiwiZW1haWwiOiJzYXNrYV9yeWJAbWFpbC5ydSJ9.P-ENUf-d1oR9bM-vnRCxaa2lMlNVEvvEZStu8Tr9o_kG-IOO8_XiGaYf9kOs4VwyVA2XRYKmBsV-fAYhG4tNwn87KbKXir2Rfs6tTavogCCAuKwYBpJc0fWlEbCIXxI5u9I-SULgbhMuoXoHjfj6cVtqsqWLq5eWha5HIcnHMUG3SXqWAffepD6UJoTTIdRaVXa9j8oqASv2AtWwoA68nB2FXtDb6R9PyC7EsOT5VYlVV8LrEbScXVTjHpBBhNnY0gkZ3339VtZ91Uun2nus3E7gI-2kmGm99tUTsTKLLRHkldijMo91c912fNc8Em4j8g6FFZd5VOPgv0rrEWr6mQ'
  });
} else {
  let initOptions = {
    url: (location.host === 'testvm.plotpad.ru') ? 'https://testvm.plotpad.ru:8443' : 'http://localhost:8080',
    realm: 'saas-shop',
    clientId: 'saas-shop-client',
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
}

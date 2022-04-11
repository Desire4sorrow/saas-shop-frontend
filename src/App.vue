<template>
  <router-view :keycloaks=keycloak></router-view>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Keycloak from 'keycloak-js'

export default {
  name: 'App',
  props: {
      keycloak: Keycloak
    }
}
</script>

<style>
body
{
  background-color: #F5F5F5;
  font-family: 'Manrope', sans-serif;
}
</style>

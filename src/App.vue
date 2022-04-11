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
    },
  mounted() {
    fetch('https://localhost:5001/api/authtest/some-data')
    .then(res => res.json())
    .then(json => console.log(json));
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

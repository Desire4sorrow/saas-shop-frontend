<template>
  <HeaderPage />
  <router-view :keycloaks=keycloak></router-view>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HeaderPage from "@/components/HeaderPage";
import Keycloak from 'keycloak-js'

export default {
  name: 'App',
  props: {
      keycloak: Keycloak
    },
  components: { HeaderPage }
}
</script>

<style>
body
{
  background-color: #F5F5F5;
  font-family: 'Manrope', sans-serif;
}
</style>

<template>
  <HeaderPage />
  <router-view></router-view>
</template>

<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HeaderPage from "@/components/HeaderPage";

export default {
  name: 'App',
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

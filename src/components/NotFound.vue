<template>
  <div class="container">
    <h1 class="not-found">Страница не найдена</h1>
  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  data() {
    return {
      redirect: ['/cabinet/profile', '/cabinet/method'],
    }
  },
  created() {
    routes.forEach((el) => {
      if (el.name !== 'NotFound') {
        this.redirect.push(el.path)
      }
    })
    let url = this.$route.fullPath.split('&')
    if (this.redirect.includes(url[0])){
      this.$router.push({ path: url[0] })
    }
  }
}
</script>

<style scoped>
.not-found
{
  margin-top: 100px;
  text-align: center;
}
</style>
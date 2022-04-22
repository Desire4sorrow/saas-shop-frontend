<template>
  <div class="container">
    <h1 class="not-found">Страница не найдена</h1>
  </div>
</template>

<script>
export default {
  created() {
    let url = this.$route.fullPath.split('&')
    if (url.length && url[0] === '/main'){
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
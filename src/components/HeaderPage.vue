<template>
  <header class="header">
    <div class="container">
      <template v-if="this.$route.path === '/account' || this.$route.path === '/account/profile'">
        <div class="profile-container">
          <a href="/" class="link">
            <img class="image" src="@/assets/image/avatar.png" alt="">
          </a>
        </div>
      </template>
      <template v-else>
        <div class="title">
          {{ title }}
        </div>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  /*mounted() {
    console.log(this.$route.name)
  },*/
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Some Default Title';
        this.title = to.meta.title || 'Some Default Title';
      }
    },
  }
}
</script>

<style scoped>
.header
{
  background-color: #fff;
  border-bottom: 1px solid #E0E0E0;
  padding: 16px 0;
}

.profile-container
{
  text-align: end;
}

.profile-container .link
{
  display: inline-block;
}

.profile-container .image
{
  max-width: 100%;
  height: 32px;
}

.title
{
  text-align: center;
  font-weight: 600;
}
</style>
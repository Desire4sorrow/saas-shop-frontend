<template>
  <header class="header">
    <div class="container">
      <div class="profile-container">
        <a href="/" class="link">
          <img class="image" src="@/assets/image/avatar.png" alt="">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage'
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
</style>
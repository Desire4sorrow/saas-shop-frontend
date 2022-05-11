<template>
  <router-link :to="{ name: `${card.name}` }" class="personal-card"
       :class="{active: this.$route.name === this.card.name}">
    <div class="image-container">
      <template v-if="card.name === 'Profile'">
        <img src="@/assets/image/icon/user-white.svg" class="image" alt="" v-if="this.$route.name === this.card.name">
        <img src="@/assets/image/icon/user.svg" class="image" alt="" v-else>
      </template>
      <template v-if="card.name === 'Method'">
        <img src="@/assets/image/icon/credit-card-white.svg" class="image" alt="" v-if="this.$route.name === this.card.name">
        <img src="@/assets/image/icon/credit-card.svg" class="image" alt="" v-else>
      </template>
    </div>
    <div class="title">
      {{ card.meta.title }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {

    }
  },
}
</script>

<style scoped>
.personal-card {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

.personal-card:hover
{
  border-color: #FF9900;
}

.personal-card:not(:last-child){
  margin-bottom: 8px;
}

.personal-card.active {
  background: #FF9900;
  margin-bottom: 16px;
  color: #fff;
  border-color: #FF9900;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.title
{
  margin-left: 10px;
}

.image-container{
  min-width: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container .image
{
  max-width: 100%;
}
</style>
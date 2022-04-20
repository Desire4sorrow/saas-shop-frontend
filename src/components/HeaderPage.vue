<template>
  <header class="header">
    <div class="container">
      <template v-if="url.includes(this.$route.name)">
        <router-link v-if="url.includes(this.$route.name) && this.$route.name !== 'BodyPage'"
                     class="button-prev" :to="{ name: 'BodyPage' }">
          <img src="/assets/image/icon/arrow-back.svg" class="image" alt="">
        </router-link>
        <div class="profile-container">
          <img class="image" src="/assets/image/avatar.png" alt="">
          <ul class="menu">
            <li class="menu-item">
              <router-link :to="{ name: 'Profile' }" class="menu-link">
                <span class="image-container">
                  <img src="/assets/image/icon/user.svg" alt="" class="image">
                </span>
                <span class="link-text">Профиль</span>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link :to="{ name: 'Method' }" class="menu-link">
                <span class="image-container">
                  <img src="/assets/image/icon/credit-card.svg" alt="" class="image">
                </span>
                <span class="link-text">Способы оплаты</span>
              </router-link>
            </li>
            <li class="menu-item">
              <button class="btn menu-link" @click="logout()">
                <span class="image-container">
                  <img src="/assets/image/icon/exit.svg" alt="" class="image">
                </span>
                <span class="link-text">Выйти</span>
              </button>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>
        <button type="button" class="btn button-prev" @click="$router.go(-1)">
          <img src="/assets/image/icon/arrow-back.svg" class="image" alt="">
        </button>
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
      url: ['BodyPage', 'PersonalAccount', 'Profile', 'Method']
    }
  },
  props: ['keycloaks'],
  methods: {
    logout: function() {
      this.keycloak.logout()
    },
  },
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

.button-prev
{
  position: absolute;
  padding: 0;
  left: 16px;
}

.button-prev .image
{
  max-width: 100%;
}

.button-prev:focus
{
  box-shadow: none;
}

.profile-container
{
  width: fit-content;
  margin: 0 0 0 auto;
  position: relative;
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

.profile-container:hover .menu
{
  display: block;
}

.menu
{
  display: none;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0 4px 5px rgba(51, 51, 51, 0.08), 0 1px 10px rgba(51, 51, 51, 0.06), 0 2px 4px rgba(51, 51, 51, 0.16);
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  list-style: none;
  padding-left: 0;
}

.menu-item
{
  padding: 12px 16px;
}

.menu-item:not(:last-child)
{
  border-bottom: 1px solid #E0E0E0;
}

.menu-link
{
  display: flex;
  align-items: center;
  text-decoration: none;
}

.menu-item:hover .link-text
{
  color: #FF9900;
}

.menu-link .image-container
{
  min-width: 24px;
  width: 24px;
}

.menu-link .image-container .image
{
  max-width: 100%;
}

.menu-link.btn{
  padding: 0;
  width: 100%;
}

.menu-link .link-text
{
  text-decoration: none !important;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  margin-left: 10px;
}
</style>
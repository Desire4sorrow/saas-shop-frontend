<template>
  <div class="container home-page">
    <h1>{{ msg }}</h1>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/method">Способы оплаты</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/details">Реквизиты</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signin">Форма входа</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile">ЛК</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      msg: 'Начальная страница'
    }
  }
}
</script>

<style scoped>
.home-page
{
  text-align: center;
}

.nav
{
  justify-content: center;
}

.nav-item
{
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

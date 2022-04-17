<template>
  <div class="container method-container">
    <div class="method-card">
      <button class="btn link-card" @click="orderPay()">
        <span class="image-container">
          <img src="@/assets/image/icon/credit-card.svg" alt="" class="image">
        </span>
        <span class="data-container">
          <span class="title">Банковская карта</span>
          <span class="subtitle">Оплата картой на сайте</span>
        </span>
      </button>
    </div>
<!--    <div class="method-card">
      <router-link to="/method" class="link-card">
        <span class="image-container">
          <img src="@/assets/image/icon/file.svg" alt="" class="image">
        </span>
        <span class="data-container">
          <span class="title">Расчётный счёт</span>
          <span class="subtitle">Выставим счёт оферту для оплаты через расчётный счёт</span>
        </span>
      </router-link>
    </div>-->
  </div>
</template>

<script>
import {HTTP} from "@/config";
let qs = require('qs');

export default {
  name: 'PaymentMethod',
  methods: {
    orderPay: function () {
      let data = {
        workspace_name: 'Stas',
        payment_method: 'bank_card',
        requisites: '{}',
      }
      for (let key in this.$route.query) {
        data[key] = this.$route.query[key]
      }

      HTTP.post('/order/create', qs.stringify(data))
          .then(function (res) {
            location.href = res.data.pay_form_url
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
.method-container
{
  margin-top: 40px;
}

.method-card
{
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  max-width: 600px;
  margin: 0 auto;
}

.method-card:hover
{
  border-color: #FF9900;
}

.method-card:hover .link-card
{
  color: inherit;
}

.link-card
{
  display: flex;
  padding: 24px;
  width: 100%;
  text-decoration: none;
  color: #000;
}

.method-card:not(:last-child)
{
  margin-bottom: 16px;
}

.image-container
{
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image
{
  max-width: 100%;
}

.data-container
{
  margin-left: 16px;
  margin-right: 10px;
}

.title
{
  font-weight: 500;
  display: block;
}

.subtitle
{
  font-weight: 500;
  font-size: 12px;
  opacity: .5;
  display: block;
}
</style>
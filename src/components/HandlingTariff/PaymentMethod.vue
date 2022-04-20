<template>
  <div class="container method-container">
    <div class="method-card" @click="choiceMethod('bank_card')">
      <div class="image-container">
        <img src="/assets/image/icon/credit-card.svg" alt="" class="image">
      </div>
      <div class="data-container">
        <div class="title">Банковская карта</div>
        <div class="subtitle">Оплата картой на сайте</div>
      </div>
    </div>
<!--<div class="method-card">
      <router-link to="/method" class="link-card">
        <span class="image-container">
          <img src="/assets/image/icon/file.svg" alt="" class="image">
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
export default {
  methods: {
    choiceMethod: function (method) {
      this.$router.push({
        name: 'PaymentDetails',
        params: {
          workspace_name: this.$route.params.workspace_name,
          licenses_count: this.$route.params.licenses_count,
          tariff_variant_id: this.$route.params.tariff_variant_id,
          payment_method: method
        }
      })
    },
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
  display: flex;
  padding: 24px;
}

.method-card:hover
{
  border-color: #FF9900;
  cursor: pointer;
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
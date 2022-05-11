<template>
  <div class="product-card"
       :class="{active: active}"
       @click="onclick(product)">
    <div class="title-card">
      <div class="title-box">
        <div class="title">{{ product.orders[0].tariff_variant.tariff.product.name }}</div>
        <div class="caption">{{ product.app_host }}</div>
      </div>
      <div class="icon-container">
        <img src="@/assets/image/icon/link-white.svg" class="image" alt="" v-if="active">
        <img src="@/assets/image/icon/link.svg" class="image" alt="" v-else>
      </div>
    </div>
    <div class="description-container">
      <div class="caption">Статус</div>
      <div class="body">{{ decodingActive() }}</div>
    </div>
    <div class="description-container">
      <div class="caption">Используется лицензий</div>
      <div class="body">
        {{ product.licenses_count }}
        из
        {{ product.orders[0].tariff_variant.tariff.maximum_licenses_count }}
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar"
             :style="'width: ' + countLicense() + '%'"
             :aria-valuenow="product.licenses_count" aria-valuemin="0"
             :aria-valuemax="product.orders[0].tariff_variant.tariff.maximum_licenses_count"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardItem',
  props: ['active', 'onclick', 'product'],
  methods: {
    decodingActive: function () {
      if (this.product.ops_status === 'not_active') return  'Неактивно';
      if (this.product.ops_status === 'active') return 'Активно';
    },
    countLicense: function () {
      let buyLicenses = this.product.licenses_count;
      let maxLicenses = this.product.orders[0].tariff_variant.tariff.maximum_licenses_count;

      return Math.round(100 * buyLicenses / maxLicenses);
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 16px 24px 24px;
  cursor: pointer;
}

.product-card.active {
  background: #FF9900;
  margin-bottom: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.title-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-box
{
  margin-right: 10px;
}

.title-card .icon-container
{
  height: 24px;
  min-width: 24px;
  width: 24px;
}

.title-card .icon-container .image
{
  max-width: 100%;
}

.title-card .title
{
  font-weight: 500;
  line-height: 24px;
}

.description-container:not(:last-child)
{
  margin-bottom: 20px;
}

.description-container .body
{
  font-weight: 500;
  color: #fff;
}

.product-card .caption
{
  font-weight: 500;
  font-size: 12px;
}

.product-card.active .title-card .icon
{
  border-color: rgba(255, 255, 255, 0.72);
}

.product-card.active .title-card
{
  margin-bottom: 20px;
}

.product-card.active .title-card .title
{
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
}

.product-card.active .caption
{
  color: rgba(255, 255, 255, 0.72);
}

.progress {
  background: rgb(255, 255, 255, 0.3);
  border-radius: 100px;
  margin-top: 8px;
  height: 6px;
}

.progress-bar {
  background: #fff;
}

.product-card:not(.active) .description-container
{
  display: none;
}
</style>
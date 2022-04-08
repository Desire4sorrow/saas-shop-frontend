<template>
  <div class="product-description-container">
    <div class="row product-description-row">
      <ProductDescriptionItem :title="'Тариф'" :subtitle="product.orders[0].tariff_variant.tariff.name"/>
      <ProductDescriptionItem :title="'Цена'" :subtitle="onePrice()"/>
      <ProductDescriptionItem :title="'Способ оплаты'" :subtitle="paymentMethod()"/>
      <ProductDescriptionItem :title="'Тип'" :subtitle="typePeriod()"/>
      <ProductDescriptionItem :title="'Общая сумма'" :subtitle="totalPrice()"/>
      <ProductDescriptionItem :title="'Следующая оплата'" :subtitle="'Скоро'"/>
    </div>
  </div>
  <div class="product-cards-container">
    <div class="title">Действия</div>
    <div class="row">
      <ProductChangeTariff />
      <ProductChangeLicenses
          :countLicenses="product.licenses_count"
          :maxLicenses="product.orders[0].tariff_variant.tariff.maximum_licenses_count"/>
      <ProductChangePayment />
    </div>
  </div>
  <div class="product-cards-container">
    <div class="title">Счета и документы</div>
    <div class="row">
      <CardBills />
    </div>
  </div>
</template>

<script>
import ProductDescriptionItem from "@/components/ProductDescriptionItem";
import ProductChangeTariff from "@/components/ProductChange/ProductChangeTariff";
import ProductChangeLicenses from "@/components/ProductChange/ProductChangeLicenses";
import ProductChangePayment from "@/components/ProductChange/ProductChangePayment";
import CardBills from "@/components/CardBills";

export default {
  name: 'ProductItemData',
  components: {
    CardBills,
    ProductChangePayment,
    ProductChangeLicenses,
    ProductDescriptionItem,
    ProductChangeTariff,
  },
  props: ['product'],
  methods: {
    onePrice: function () {
      return this.product.orders[0].tariff_variant.price.toLocaleString() + ' ₽ / лицензия'
    },
    paymentMethod: function () {
      if (this.product.orders[0].payment_method === 'bank_card') return 'Банковская карта'
      if (this.product.orders[0].payment_method === null) return 'Расчётный счёт'
    },
    typePeriod: function () {
      if (this.product.orders[0].tariff_variant.period === 30) return 'Месячный'
      if (this.product.orders[0].tariff_variant.period === 365) return 'Годовой'
    },
    totalPrice: function () {
      if (this.typePeriod() === 'Годовой')
      {
        return ((this.product.orders[0].tariff_variant.price * this.product.licenses_count) * 12).toLocaleString() + ' ₽'
      }
      return (this.product.orders[0].tariff_variant.price * this.product.licenses_count).toLocaleString() + ' ₽'
    }
  }
}
</script>

<style scoped>
.product-description-container
{
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 24px;
  margin-bottom: 32px;
}

.product-description-row
{
  row-gap: 24px;
}

.product-cards-container:not(:last-child)
{
  margin-bottom: 32px;
}

.product-cards-container .title
{
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
}
</style>

<style>
.product-cards-container .change-card
{
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}

.product-cards-container .change-card .title
{
  font-weight: 500;
  text-align: initial;
  line-height: 20px;
}

.product-cards-container .change-card .image-container
{
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.product-cards-container .change-card .image-container .image
{
  max-width: 100%;
}
</style>
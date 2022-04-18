<template>
  <div class="product-description-container">
    <div class="row product-description-row">
      <ProductDescriptionItem :title="'Тариф'" :subtitle="product.orders[0].tariff_variant.tariff.name"/>
      <ProductDescriptionItem :title="'Цена'" :subtitle="onePrice(this.product.orders[0].tariff_variant.price)"/>
      <ProductDescriptionItem :title="'Способ оплаты'" :subtitle="paymentMethod(this.product.orders[0].payment_method)"/>
      <ProductDescriptionItem :title="'Тип'" :subtitle="typePeriod(this.product.orders[0].tariff_variant.period)"/>
      <ProductDescriptionItem :title="'Общая сумма'"
                              :subtitle="totalPrice(this.product.orders[0].total_price)"/>
      <ProductDescriptionItem :title="'Следующая оплата'"
                              :subtitle="date(this.product.orders[0].createdAt, this.product.next_pay_date)"/>
    </div>
  </div>
  <div class="product-cards-container">
    <div class="title">Действия</div>
    <div class="row">
      <ProductChangeTariff :productId="product.orders[0].tariff_variant.tariff.product.id"/>
      <ProductChangeLicenses :product="product"/>
      <ProductChangePayment
          :methodPayment="product.orders[0].payment_method"/>
    </div>
  </div>
  <div class="product-cards-container">
    <div class="title">Счета и документы</div>
    <div class="row">
      <CardBills v-for="order in product.orders"
                 :key="order" :order="order"
                 :date="date" :totalPrice="totalPrice" :period="typePeriod" :onePrice="onePrice" :method="paymentMethod"/>
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
  data() {
    let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября','ноября', 'декабря'];

    return { month }
  },
  created() {
    console.log(this.product.orders)
  },
  methods: {
    onePrice: function (value) {
      return value.toLocaleString() + ' ₽ / лицензия'
    },
    paymentMethod: function (value) {
      if (value === 'bank_card') return 'Банковская карта'
      if (value === 'details_payment') return 'Расчётный счёт'
    },
    typePeriod: function (period) {
      if (period === 30) return 'Месячный'
      if (period === 360) return 'Годовой'
    },
    totalPrice: function (price) {
      return price.toLocaleString() + ' ₽'
    },
    date: function (dateJSON, nextPay = true) {
      let date = new Date(dateJSON);

      if (nextPay) {
        return date.getDate() + ' ' + this.month[date.getMonth()] + ' ' + date.getFullYear()
      }
      else {
        return '-'
      }
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
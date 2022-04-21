<template>
  <div class="product-description-container">
    <div class="row product-description-row">
      <ProductDescriptionItem v-for="el in variant" :key="el" :data="el"/>
    </div>
  </div>
  <div class="product-cards-container">
    <div class="title">Действия</div>
    <div class="row">
      <ProductChangeTariff :tariff="tariff"/>
      <ProductChangeLicenses :product="product"/>
  <!--<ProductChangePayment :methodPayment="product.orders[0].payment_method"/>-->
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
//import ProductChangePayment from "@/components/ProductChange/ProductChangePayment";
import CardBills from "@/components/CardBills";

export default {
  name: 'ProductItemData',
  components: {
    CardBills,
    //ProductChangePayment,
    ProductChangeLicenses,
    ProductDescriptionItem,
    ProductChangeTariff,
  },
  props: ['product'],
  data() {
    return {
      month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
      variant: [],
      tariff: {
        tariffId: '',
        productId: ''
      },
    }
  },
  created() {
    let arrPaid = []
    this.product.orders.forEach((el) => {
      if (el.payment_status === 'success') arrPaid.push(el)
    })
    if (arrPaid.length === 0) {
      this.product.orders.forEach((el) => {
        if (el.payment_status === 'not_paid') arrPaid.push(el)
      })
      this.sortByPaid(arrPaid, 'createdAt')
      this.dateEntry(arrPaid[0])
    }
    else {
      this.sortByPaid(arrPaid, 'paid_at')
      this.dateEntry(arrPaid[0])
    }
  },
  methods: {
    sortByPaid: function (arr, method) {
      if (method === 'paid_at') {
        arr.sort((a, b) => Date.parse(a.paid_at) < Date.parse(b.paid_at) ? 1 : -1)
      }
      if (method === 'createdAt') {
        arr.sort((a, b) => Date.parse(a.createdAt) < Date.parse(b.createdAt) ? 1 : -1)
      }
    },
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
    date: function (dateJSON) {
      let date = new Date(dateJSON);

      return date.getDate() + ' ' + this.month[date.getMonth()] + ' ' + date.getFullYear()
    },
    dateEntry: function (obj) {
      this.tariff.tariffId = obj.tariff_variant.tariff.id
      this.tariff.productId = obj.tariff_variant.tariff.product.id
      this.variant.push({name: 'Тариф', value: obj.tariff_variant.tariff.name})
      this.variant.push({name: 'Цена', value: this.onePrice(obj.tariff_variant.price)})
      this.variant.push({name: 'Способ оплаты', value: this.paymentMethod(obj.payment_method)})
      this.variant.push({name: 'Тип', value: this.typePeriod(obj.tariff_variant.period)})
      this.variant.push({name: 'Общая сумма', value: this.totalPrice(this.product.total_amount)})
      if (this.product.next_pay_date !== null) {
        this.variant.push({name: 'Следующая оплата', value: this.date(this.product.next_pay_date)})
      }
      else {
        this.variant.push({name: 'Следующая оплата', value: '-'})
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
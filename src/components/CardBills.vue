<template>
  <div class="col-lg-4">
    <div class="card-bills">
      <div class="header-card">
        <div class="data-header">
          <div class="caption">{{ date((this.order.work_at) ? this.order.work_at : this.order.createdAt) }}</div>
          <div class="price">
            {{ totalPrice(this.order.total_amount) }}
          </div>
        </div>
        <div class="menu-header">
          <img class="icon-menu" src="@/assets/image/icon/more.svg" alt="">
          <ul class="menu">
            <li class="menu-item">
              <button class="btn menu-link" @click="requestOrder()">
                <span class="image-container">
                  <img src="@/assets/image/icon/bill.svg" alt="" class="image">
                </span>
                <span class="link-text">Открыть счёт</span>
              </button>
            </li>
            <li class="menu-item" v-if="this.order.act_document === null">
              <button class="btn menu-link" @click="requestAct()">
                <span class="image-container">
                  <img src="@/assets/image/icon/file.svg" alt="" class="image">
                </span>
                <span class="link-text">Запросить акт</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="body-card">
        <div class="body-item">
          <div class="item-title">Тариф</div>
          <div class="item-description">{{ this.order.tariff_variant.tariff.name }}</div>
        </div>
        <div class="body-item">
          <div class="item-title">Тип</div>
          <div class="item-description">{{ period(this.order.tariff_variant.period) }}</div>
        </div>
        <div class="body-item">
          <div class="item-title">Цена</div>
          <div class="item-description">{{ onePrice(this.order.tariff_variant.price) }}</div>
        </div>
        <div class="body-item">
          <div class="item-title">Лицензий</div>
          <div class="item-description">{{ this.order.licenses_count }}</div>
        </div>
        <div class="body-item">
          <div class="item-title">Способ оплаты</div>
          <div class="item-description">{{ method(this.order.payment_method) }}</div>
        </div>
        <div class="btn button-card waiting" v-if="isWaiting">
          Ожидает подтверждения
        </div>
        <div class="btn button-card success" v-else-if="isSuccess">
          Оплачен
        </div>
        <div class="btn button-card error" v-else-if="isError">
          Ошибка оплаты
        </div>
        <button class="btn button-card" v-else @click="pay()">
          Оплатить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";

export default {
  inject: ['$keycloak'],
  props: ['order', 'date', 'totalPrice', 'period', 'onePrice', 'method'],
  data() {
    return {
      isWaiting: (this.order.payment_status === 'waiting'),
      isSuccess: (this.order.payment_status === 'success'),
      isError: (this.order.payment_status === 'fail'),
    }
  },
  methods: {
    pay: function () {
      let data = {
        order_id: this.order.order_id,
      }

      HTTP.get('/order/pay_url', {
        params: data,
        headers: {
          authorization: 'Bearer ' + this.$keycloak.token,
        }
      }).then((response) => {
        location.href = response.data.pay_form_url
      }).catch((error) => {
        console.log(error)
      })
    },
    requestAct: function () {
      let data = {
        order_id: this.order.order_id,
      }

      HTTP.get('/order/act', {
        params: data,
        headers: {
          authorization: 'Bearer ' + this.$keycloak.token,
        }
      }).then(() => {
        location.reload()
      }).catch((error) => {
        console.log(error)
      })
    },
    requestOrder: function () {
      let documentPath = this.order.offer_invoice_document.filename
      window.open('http://testvm.plotpad.ru:4964/documents/offer_invoice/' + documentPath)
    }
  },
}
</script>

<style scoped>
.card-bills
{
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin-bottom: 24px;
}

.header-card
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #E0E0E0;
}

.price
{
  font-weight: 700;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
}

.caption {
  font-weight: 500;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.56);
}

.menu-header{
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.menu-header:hover
{
  background-color: #F5F5F5;
  border-radius: 50%;
}

.menu-header:hover .menu
{
  display: block;
}

.menu-header .icon-menu
{
  max-width: 100%;
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

.menu-item:not(:last-child)
{
  border-bottom: 1px solid #E0E0E0;
}

.menu-link
{
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 16px;
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

.menu-link .link-text
{
  text-decoration: none !important;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  margin-left: 10px;
}

.body-card
{
  padding: 16px;
}

.item-title
{
  color: rgba(0, 0, 0, 0.56);
  min-width: 100px;
  margin-right: 10px;
}

.body-item
{
  display: flex;
  font-size: 12px;
  font-weight: 500;
}

.body-item:not(:last-child)
{
  margin-bottom: 16px;
}

.button-card
{
  width: 100%;
  border-radius: 5px;
  padding: 8px 2px;
  background-color: #FF9900;
  color: #fff;
  margin-top: 8px;
}

.button-card.waiting{
  background-color: #F5F5F5;
  color: rgba(0, 0, 0, 0.56);
  cursor: default;
  pointer-events: none;
}

.button-card.success{
  background-color: #EEF9E8;
  color: #6DCC3D;
  cursor: default;
  pointer-events: none;
}

.button-card.error{
  background-color: #f9e8e8;
  color: #cc3d3d;
  cursor: default;
  pointer-events: none;
}
</style>
<template>
  <div class="col-xl-4">
    <button type="button" class="change-card"  data-bs-toggle="modal" data-bs-target="#modalChangeLicenses">
      <span class="title">Изменить количество лицензий</span>
      <span class="image-container">
        <img class="image" src="/assets/image/icon/file.svg" alt="">
      </span>
    </button>
  </div>

  <div class="modal fade" id="modalChangeLicenses" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Изменение количества лицензий</div>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-container">
            <div class="title">Кол-во лицензий:</div>
            <div class="input-control">
              <div class="control-minus" @click="countMinus()"></div>
              <input class="input"
                     type="number" name="count" min="1"
                     :max="product.orders[0].tariff_variant.tariff.maximum_licenses_count"
                     :value="countLicensesLocal">
              <div class="control-plus" @click="countPlus()"></div>
            </div>
          </div>
          <div class="input-warning" :class="{active: this.active}">
            <div class="image-container">
              <img class="image" src="/assets/image/icon/warning.svg" alt="">
            </div>
            <div class="title">
              Если вы уменьшите количество лицензий,
              некоторые пользователи потеряют доступ к лицензионным функциям.
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn button-close" data-bs-dismiss="modal">Отменить</button>
          <button type="button" class="btn button-check" ref="buttonChanged" disabled @click="changeLicenses()">Изменить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";
let qs = require('qs');

export default {
  name: 'ProductChangeLicenses',
  props: ['product'],
  data() {
    let active = false;
    let countLicensesLocal = this.product.licenses_count;

    return { active, countLicensesLocal }
  },
  methods: {
    changeLicenses: function (){
      let data = {
        order_id: this.product.order_id,
        licenses_count: this.countLicensesLocal,
      }

      HTTP.post('/order/update', qs.stringify(data), {
        headers: {
          authorization: 'Bearer ' + window.keycloak.token,
        }
      }).then(function (res) {
          console.log(res)
          location.href = res.data.pay_form_url
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    countPlus: function () {
      let currentValue = this.countLicensesLocal;
      currentValue += 1;

      if (!(this.product.orders[0].tariff_variant.tariff.maximum_licenses_count >= currentValue)) return;
      if (currentValue === this.product.licenses_count) {
        this.$refs.buttonChanged.disabled = true;
        this.countLicensesLocal = currentValue;
        this.active = false;
        return;
      }

      this.$refs.buttonChanged.disabled = false;
      this.countLicensesLocal = currentValue;
    },
    countMinus: function () {
      let currentValue = this.countLicensesLocal;
      currentValue -= 1;

      if (currentValue < 1) return;
      if (currentValue < this.product.licenses_count) {
        this.active = true;
      }
      if (currentValue === this.product.licenses_count) {
        this.$refs.buttonChanged.disabled = true;
        this.countLicensesLocal = currentValue;
        this.active = false;
        return;
      }

      this.$refs.buttonChanged.disabled = false;
      this.countLicensesLocal = currentValue;
    }
  },
}
</script>

<style scoped>
.modal-dialog
{
  max-width: 600px;
  margin-top: 200px;
}

.modal-header
{
  border-bottom: none;
}

.modal-footer
{
  border-top: none;
}

.modal-title
{
  font-size: 20px;
  font-weight: 700;
}

.button-close
{
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.56);
  width: 100px;
  height: 40px;
}

.button-check
{
  min-width: 100px;
  height: 40px;
  background-color: #FF9900;
  color: #fff;
  border-radius: 5px;
}

.input-container
{
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-container .title
{
  font-weight: 500;
}

.input-container .input-control
{
  display: flex;
  align-items: center;
  overflow: hidden;
}

.input-container .input
{
  border: none;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  width: 50px;
  background-color: transparent;
}

.input-warning
{
  background-color: #FEEDF0;
  border: 1px solid rgba(241, 93, 72, 0.24);
  border-radius: 5px;
  margin-top: 16px;
  color: #F15D48;
  font-weight: 500;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  display: none;
}

.input-warning.active
{
  display: flex;
}

.input-warning .image-container
{
  min-width: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
}

.input-warning .image-container .image
{
  max-width: 100%;
}

.control-minus,
.control-plus
{
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
}

.control-plus::before,
.control-plus::after
{
  content: '';
  width: 16px;
  height: 2px;
  background-color: #707070;
  position: absolute;
  top: calc(50% - 1px);
  border-radius: 6px;
}

.control-plus::after
{
  transform: rotate(90deg);
}

.control-minus::before
{
  content: '';
  width: 16px;
  height: 2px;
  background-color: #707070;
  position: absolute;
  top: calc(50% - 1px);
  border-radius: 5px;
}

.input-container .input::-webkit-outer-spin-button,
.input-container .input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance:textfield;
}

.input-container .input:focus-visible
{
  outline: none;
}
</style>
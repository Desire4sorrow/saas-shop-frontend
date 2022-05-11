<template>
  <div class="container">
    <div class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title">Название организации</span>
            <input type="text" class="form-control" placeholder="Введите название организации" @focusout="checkInput(3)"
                   v-model.trim="organization_name">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ОГРН</span>
            <input type="number" class="form-control" name="ogrn" placeholder="Введите ОГРН" @focusout="checkInput(13)"
                   v-model="ogrn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ИНН</span>
            <input type="number" class="form-control" name="inn" placeholder="Введите ИНН" @focusout="checkInput(10)"
                   v-model="inn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">КПП</span>
            <input type="number" class="form-control" name="kpp" placeholder="Введите КПП" @focusout="checkInput(9)"
                   v-model="kpp">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Юридический адрес</span>
            <input type="text" class="form-control" placeholder="Введите юридический адрес" @focusout="checkInput(10)"
                   v-model.trim="organization_address">
          </label>
        </div>
<!--        <div class="form-group">
          <label class="form-label">
            <span class="title">Номер телефона</span>
            <input type="number" class="form-control" name="telephone" placeholder="Введите номер телефона" v-model="telephone">
          </label>
        </div>-->
      </div>
      <button class="btn button-details" role="button" @click="createOrder()" :disabled="isButton">
        <span class="spinner-border spinner-border-sm" role="status" v-if="status">
          <span class="visually-hidden">Loading...</span>
        </span>
        <span v-if="!status">Сформировать счёт</span>
      </button>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";
let qs = require('qs');

export default {
  inject: ['$keycloak'],
  data() {
    return {
      organization_name: '',
      ogrn: '',
      inn: '',
      kpp: '',
      organization_address: '',
      isButton: true,
      status: false,
    }
  },
  watch: {
    organization_name: function () {
      if (String(this.organization_name).length >= 3) {
        this.removeWarning(event)
      }
      this.checkedButton()
    },
    ogrn: function () {
      if (String(this.ogrn).length > 13){
        this.ogrn = String(this.ogrn).slice(0, 13)
        this.removeWarning(event)
      }
      this.checkedButton()
    },
    inn: function () {
      if (String(this.inn).length > 10){
        this.inn = String(this.inn).slice(0, 10)
        this.removeWarning(event)
      }
      this.checkedButton()
    },
    kpp: function () {
      if (String(this.kpp).length > 9){
        this.kpp = String(this.kpp).slice(0, 9)
        this.removeWarning(event)
      }
      this.checkedButton()
    },
    organization_address: function () {
      if (String(this.organization_address).length >= 10) {
        this.removeWarning(event)
      }
      this.checkedButton()
    },
  },
  methods: {
    checkInput: function (length) {
      if (Number(event.target.value.length) < length) {
        event.target.classList.add('warning')
        event.target.previousSibling.classList.add('warning')
      }
      else {
        this.removeWarning(event)
      }
    },
    removeWarning: function (ev) {
      ev.target.classList.remove('warning')
      ev.target.previousSibling.classList.remove('warning')
    },
    checkedButton: function () {
      let boolCheck = true
      if ((String(this.organization_name).length >= 3) && (String(this.ogrn).length === 13) && (String(this.inn).length === 10) &&
          (String(this.kpp).length === 9) && (String(this.organization_address).length >= 10)) {
        boolCheck = false
      }
      this.isButton = boolCheck
    },
    createOrder: function () {
      let data = {
        workspace_name: this.$route.params.workspace_name,
        tariff_variant_id: this.$route.params.tariff_variant_id,
        licenses_count: this.$route.params.licenses_count,
        payment_method: this.$route.params.payment_method
      }
      let requisites = {
        organization_name: this.organization_name,
        ogrn: this.ogrn,
        inn: this.inn,
        kpp: this.kpp,
        organization_address: this.organization_address,
        telephone: this.telephone
      }
      data.requisites = JSON.stringify(requisites)

      this.status = true
      this.isButton = true

      HTTP.post('/order/create', qs.stringify(data), {
        headers: {
          Authorization: 'Bearer ' + this.$keycloak.token,
        }
      }).then((res) => {
        this.status = false
        location.href = res.data.pay_form_url
      })
      .catch((error) => {
        this.isButton = false
        this.status = false
        console.log(error)
      })
    },
  }
}

</script>

<style scoped>
.form-details {
  width: 600px;
  margin: 40px auto;
}

.form-details .form-container
{
  background: #fff;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  padding: 16px;
}

.form-group:not(:last-child)
{
  margin-bottom: 16px;
}

.form-label
{
  margin-bottom: 0;
  width: 100%;
}

.form-label .title
{
  font: 500 12px 'Manrope', sans-serif;
  margin-bottom: 8px;
  display: inline-block;
}

.form-label .title.warning
{
  color: #F15D48;
}

.form-control
{
  padding: 14px 16px;
}

.form-control.warning
{
  border-color: #F15D48;
}

.form-control:focus
{
  box-shadow: none;
  border-color: #ff9700;
}

.button-details
{
  background-color: #ff9700;
  color: #fff;
  font: 600 14px 'Manrope', sans-serif;
  width: 100%;
  padding: 12px 0;
  margin-top: 16px;
}

.button-details:hover
{
  background-color: #d98200;
}

.form-control[type=number]::-webkit-outer-spin-button,
.form-control[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-control[type=number]{
  -moz-appearance:textfield;
}

.warning-text.none{
  display: none;
}
</style>

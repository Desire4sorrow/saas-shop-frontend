<template>
  <div class="container">
    <div class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title">Название организации</span>
            <input type="text" class="form-control" placeholder="Введите название организации" v-model.trim="organization_name">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ОГРН</span>
            <input type="number" class="form-control" name="ogrn" placeholder="Введите ОГРН" v-model="ogrn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ИНН</span>
            <input type="number" class="form-control" name="inn" placeholder="Введите ИНН" v-model="inn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">КПП</span>
            <input type="number" class="form-control" name="kpp" placeholder="Введите КПП" v-model="kpp">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Юридический адрес</span>
            <input type="text" class="form-control" placeholder="Введите юридический адрес" v-model.trim="organization_address">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Номер телефона</span>
            <input type="number" class="form-control" name="telephone" placeholder="Введите номер телефона" v-model="telephone">
          </label>
        </div>
      </div>
      <button class="btn button-details" role="button" @click="createOrder()" :disabled="isButton">
        Сформировать счёт
      </button>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";
let qs = require('qs');

export default {
  name: 'PaymentDetails',
  data() {
    return {
      organization_name: '',
      ogrn: '',
      inn: '',
      kpp: '',
      organization_address: '',
      telephone: '',
      isButton: true,
    }
  },
  watch: {
    organization_name: function () {
      this.checkedButton()
    },
    ogrn: function () {
      if (String(this.ogrn).length > 13){
        this.ogrn = String(this.ogrn).slice(0, 13)
      }
      this.checkedButton()
    },
    inn: function () {
      if (String(this.inn).length > 10){
        this.inn = String(this.inn).slice(0, 10)
      }
      this.checkedButton()
    },
    kpp: function () {
      if (String(this.kpp).length > 9){
        this.kpp = String(this.kpp).slice(0, 9)
      }
      this.checkedButton()
    },
    organization_address: function () {
      this.checkedButton()
    },
  },
  methods: {
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

      HTTP.post('/order/create', qs.stringify(data), {
        headers: {
          Authorization: 'Bearer ' + window.keycloak.token,
        }
      }).then((res) => {
          location.href = res.data.pay_form_url
        })
        .catch((error) => {
          console.log(error)
        })
    },
    checkedButton: function () {
      let boolCheck = true;
      boolCheck = !(String(this.organization_name).length >= 3);
      boolCheck = !(String(this.ogrn).length === 13);
      boolCheck = !(String(this.inn).length === 10);
      boolCheck = !(String(this.kpp).length === 9);
      boolCheck = !(String(this.organization_address).length >= 10);
      console.log(boolCheck)
      //boolCheck = String(this.telephone).length >= 10;
      this.isButton = boolCheck
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

.form-control
{
  padding: 14px 16px;
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
</style>

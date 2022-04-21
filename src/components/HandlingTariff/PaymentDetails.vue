<template>
  <div class="container">
    <div class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title">Название организации</span>
            <input type="text" class="form-control" placeholder="Введите название организации" v-model="requisites.organization_name">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ОГРН</span>
            <input type="text" class="form-control" placeholder="Введите ОГРН" v-model="requisites.ogrn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ИНН</span>
            <input type="text" class="form-control" placeholder="Введите ИНН" v-model="requisites.inn">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">КПП</span>
            <input type="text" class="form-control" placeholder="Введите КПП" v-model="requisites.kpp">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Юридический адрес</span>
            <input type="text" class="form-control" placeholder="Введите юридический адрес" v-model="requisites.organization_address">
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Номер телефона</span>
            <input type="text" class="form-control" name="telephone" placeholder="Введите номер телефона" v-model="requisites.telephone">
          </label>
        </div>
      </div>
      <button class="btn button-details" role="button" @click="createOrder()">
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
      requisites: {
        organization_name: '',
        ogrn: '',
        inn: '',
        kpp: '',
        organization_address: '',
        telephone: ''
      },
    }
  },
  methods: {
    createOrder: function () {
      let data = {
        workspace_name: this.$route.params.workspace_name,
        tariff_variant_id: this.$route.params.tariff_variant_id,
        licenses_count: this.$route.params.licenses_count,
        payment_method: this.$route.params.payment_method
      }
      data.requisites = JSON.stringify(this.requisites)

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
    }
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
</style>

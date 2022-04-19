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
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import axios from "axios";
let qs = require('qs');

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'PaymentDetails',
  props: ['licensesCount', 'tariffId', 'workspace', 'method'],
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
  validations () {
    return {
      requisites: {
        organization_name: {
          required
        },
        ogrn: {
          required,
          minLength: minLength(13),
          maxLength: maxLength(13)
        },
        inn: {
          required
        },
        kpp: {
          required
        },
        organization_address: {
          required
        },
        telephone: {
          required
        }
      }
    }
  },
  created() {
    console.log(this.licensesCount, this.tariffId, this.workspace)
  },
  methods: {
    doPayment: function () {
      let data = {
        workspace_name: this.workspace,
        tariff_variant_id: this.tariffId,
        licenses_count: this.licensesCount,
        payment_method: this.method
      }
      data.requisites = JSON.stringify(this.requisites)

      axios.post('/order/create', qs.stringify(data))
          .then((res) => {
            location.href = res.data.pay_form_url
          })
          .catch((error) => {
            console.log(error)
          })
    },
    createOrder: async function() {
      let data = {
        workspace_name: this.workspace,
        tariff_variant_id: this.tariffId,
        licenses_count: this.licensesCount,
        payment_method: this.method,
      }

      data.requisites = JSON.stringify(this.requisites)

      let config = {
        method: 'post',
        url: 'http://testvm.plotpad.ru:4964/api/order/create',
        headers: {
          Authorization: 'Bearer ' + window.keycloak.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(data)
      };

      axios(config)
          .then(function (response) {
            console.log(response)
            location.href = response.data.pay_form_url;
          })
          .catch(function (error) {
            console.log(error);
          });
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

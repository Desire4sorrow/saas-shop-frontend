<template>
  <div class="container">
    <div class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title">Название пространства</span>
            <input type="text" class="form-control" placeholder="Введите название пространства" v-model="workspace">
            <span class="alert alert-danger" :class="{view: isAlertDanger}">Этот пространство уже занято.</span>
            <span class="alert alert-success" :class="{view: isAlertSuccess}">Этот пространство свободно.</span>
          </label>
        </div>
      </div>
      <button type="button" class="btn button-check" v-if="isDisabled" @click="checkWorkspace()"
              :disabled="workspace.length === 0">
        Проверить
      </button>
      <router-link class="btn button-details" v-else
                   :to="{ name: 'PaymentDetails', params: { licensesCount: this.licensesCount, tariffId: this.tariffId, workspace: this.workspace, method: this.method }}">
        Заполнение реквизитов
      </router-link>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";

export default {
  props: ['licensesCount', 'tariffId', 'method'],
  data() {
    return {
      workspace: '',
      isDisabled: true,
      isAlertDanger: false,
      isAlertSuccess: false,
    }
  },
  watch: {
    workspace: function () {
      this.isDisabled = true
    }
  },
  methods: {
    checkWorkspace: function () {
      let data = {
        workspace_name: this.workspace,
      }

      HTTP.get('/order/workspace/is_free', {params: data}, {
        headers: {
          authorization: 'Bearer ' + window.moctoken,
        }
      }).then((res) => {
          if (res.data.status) {
            this.isDisabled = !this.isDisabled
            this.isAlertSuccess = true
            setTimeout(() => {
              this.isAlertSuccess = false
            }, 3000)
          }
          else {
            this.workspace = ''
            this.isAlertDanger = true
            setTimeout(() => {
              this.isAlertDanger = false
            }, 3000)
          }
        })
        .catch((error) => {
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

.form-container
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

.form-label .alert
{
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 20px;
  transition: .9s;
  display: none;
}

.form-label .alert.view
{
  display: block;
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

.button-details,
.button-check
{
  color: #fff;
  font: 600 14px 'Manrope', sans-serif;
  width: 100%;
  padding: 12px 0;
  margin-top: 16px;
}

.button-details:focus,
.button-check:focus
{
  box-shadow: none;
}

.button-details
{
  background-color: #ff9700;
}

.button-check
{
  background-color: #c6c6c6;
}

.button-details:hover
{
  background-color: #d98200;
}
</style>
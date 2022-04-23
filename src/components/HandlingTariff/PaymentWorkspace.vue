<template>
  <div class="container">
    <div class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title" :class="{warning: alert}">URL-адрес</span>
            <span class="input-container">
              <input type="text" class="form-control" :class="{warning: alert}" placeholder="Например, название компании" v-model="workspace">
              <span class="input-example">.example.ru</span>
            </span>
            <span class="subtitle warning" v-if="alert">Такой адрес уже существует.</span>
            <span class="subtitle" v-else>По этой ссылке будет доступен продукт, который вы приобрели.</span>
          </label>
        </div>
      </div>
      <button type="button" class="btn button-check" @click="checkWorkspace()" :disabled="isDisabled">
        <span class="spinner-border spinner-border-sm" role="status" v-if="status">
          <span class="visually-hidden">Loading...</span>
        </span>
        <span v-if="!status">Установить</span>
      </button>
    </div>
  </div>
</template>

<script>
import {HTTP} from "@/config";

export default {
  inject: ['$keycloak'],
  data() {
    return {
      workspace: '',
      isDisabled: true,
      alert: false,
      status: false,
    }
  },
  watch: {
    workspace: function () {
      this.workspace = this.workspace.trim().toLowerCase();
      this.alert = false;
      (this.workspace !== '') ? this.isDisabled = false : this.isDisabled = true
    }
  },
  methods: {
    checkWorkspace: function () {
      let data = {
        workspace_name: this.workspace,
      }
      this.status = true
      this.isDisabled = true

      HTTP.get('/order/workspace/is_free', {
        params: data ,
        headers: {
          authorization: 'Bearer ' + this.$keycloak.token,
        }
      }).then((response) => {
        this.status = false
        if (!response.data.status) {
          this.isDisabled = true
          this.alert = true
        }
        else if (response.data.status) {
          //data['licenses_count'] = this.$route.query.licenses_count
          //data['tariff_variant_id'] = this.$route.query.tariff_variant_id
          this.isDisabled = false

          this.$router.push({
            name: 'PaymentMethod',
            params: {
              workspace_name: this.workspace,
              licenses_count: this.$route.query.licenses_count,
              tariff_variant_id: this.$route.query.tariff_variant_id
            }
          })
        }
      })
        .catch((error) => {
          this.status = false
          this.isDisabled = false
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

.form-label .title,
.form-label .subtitle
{
  font-size: 12px;
  font-weight: 500;
  display: block;
}

.form-label .title
{
  margin-bottom: 8px;
}

.form-label .subtitle
{
  color: rgba(0, 0, 0, 0.56);
  margin-top: 8px;
}

.form-label .subtitle.warning,
.form-label .title.warning
{
  color: #F15D48;
}

.form-control
{
  padding: 14px 120px 14px 16px;
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

.input-container
{
  position: relative;
  display: block;
}

.input-example
{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  font-weight: 500;
  color: rgba(0, 0, 0, 0.56);
}

.button-check
{
  color: #fff;
  font: 600 14px 'Manrope', sans-serif;
  width: 100%;
  padding: 12px 0;
  margin-top: 16px;
}

.button-check:focus
{
  box-shadow: none;
}

.button-check
{
  background-color: #ff9700;
}

.button-check:hover
{
  background-color: #d98200;
}
</style>
<template>
  <div class="col-xl-4">
    <button type="button" class="change-card" data-bs-toggle="modal" data-bs-target="#modalChangeTariff">
      <span class="title">Изменить тариф</span>
      <span class="image-container">
        <img class="image" src="@/assets/image/icon/bill.svg" alt="">
      </span>
    </button>
  </div>

  <div class="modal fade" id="modalChangeTariff" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Выберите тариф</div>
          <div class="period-container">
            <div class="period-title">
              Месячный
            </div>
            <label class="period">
              <input type="checkbox" class="period-input" v-model="checked">
              <span class="slider"></span>
            </label>
            <div class="period-title">
              Годовой
            </div>
          </div>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container px-0">
            <div class="row">
              <ChangeTariffItem v-for="el in arrTariffs" :key="el" :checked="checked" :tariffItem="el"
                                :list="list" :lengthList="lengthList" :orderId="tariff.orderId" :tariff="tariff" :workspace="product"/>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ChangeTariffItem from "./ChangeTariffItem"
import axios from "axios";

export default {
  components: {
    ChangeTariffItem
  },
  props: ['tariff', 'product'],
  data() {
    return {
      arrTariffs: [],
      checked: false,
      list: [],
      lengthList: []
    }
  },
  created() {
    if (Number(this.tariff.period) === 30) {
      this.checked = false
    }
    else if (Number(this.tariff.period) === 360) {
      this.checked = true
    }

    let typeUrl = process.env.VUE_APP_SERVICE_PRODUCT_URL + '/api/products/' //(location.host === 'testvm.plotpad.ru') ? 'http://testvm.plotpad.ru:3005/api/products/' : 'http://localhost:3005/api/products/'
    axios.get(typeUrl + this.tariff.productId + '?populate[0]=tariffs.tariff_variants')
         .then((response) => {
           response.data.tariffs.forEach((el) => {
             if (el.id !== this.tariff.tariffId) {
               this.arrTariffs.push(el)
               this.getList(el.description, el.id)
             }
           })
         })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    getList: function (des, id) {
      let list = des.split('|').map(function (item) {
        return item.trim()
      })

      if (this.list.length < list.length) {
        this.list = list
      }

      this.lengthList.push({id: id, length: list.length})
    }
  }
}
</script>

<style scoped>
.modal-dialog
{
  max-width: 800px;
  margin-top: 70px;
}

.modal-body
{
  background-color: #F5F5F5;
  border-radius: 0 0 5px 5px;
}

.modal-title
{
  font-size: 20px;
  font-weight: 700;
}

.modal-header .btn-close
{
  margin: 0;
}

.period-container
{
  display: flex;
  align-items: center;
  justify-content: center;
}

.period-title
{
  font-weight: 600;
}

.period
{
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  margin: 0 16px;
}

.period-input
{
  opacity: 0;
  width: 0;
  height: 0;
}

.period-input:checked + .slider
{
  background-color: #FF9900;
}

.period-input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.slider
{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 100px;
}

.slider:before
{
  content: "";
  position: absolute;
  height: 22px;
  width: 22px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
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

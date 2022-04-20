<template>
  <div class="col-xl-4">
    <button type="button" class="change-card" data-bs-toggle="modal" data-bs-target="#modalChangeTariff">
      <span class="title">Изменить тариф</span>
      <span class="image-container">
        <img class="image" src="/assets/image/icon/bill.svg" alt="">
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
              <input type="checkbox" class="period-input">
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
              <div class="col-lg-6">
                <div class="tariff-card">
                  <div class="title-card">Базовый</div>
                  <div class="price">
                    <span class="price-bold">1 500 ₽</span> / лицензия
                  </div>
                  <ul class="list">
                    <li class="list-item">
                      <span class="icon-check"></span>
                      Первое преимущество
                    </li>
                    <li class="list-item">
                      <span class="icon-check"></span>
                      Второе преимущество
                    </li>
                    <li class="list-item none">
                      <span class="icon-close"></span>
                      Третье преимущество
                    </li>
                    <li class="list-item none">
                      <span class="icon-close"></span>
                      Четвертое преимущество
                    </li>
                    <li class="list-item none">
                      <span class="icon-close"></span>
                      Пятое преимущество
                    </li>
                  </ul>
                  <div class="input-container">
                    <div class="title">Кол-во лицензий:</div>
                    <div class="input-control">
                      <div class="control-minus"></div>
                      <input class="input"
                             type="number" name="count" min="1">
                      <div class="control-plus"></div>
                    </div>
                  </div>
                  <button class="card-button" type="button">
                    Купить за <span class="button-value"></span> ₽
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import {HTTP} from "@/config";

export default {
  name: 'ProductChangeTariff',
  props: ['productId'],
  /*created() {
    HTTP.get('/products/39?populate[0]=tariffs.tariff_variants')
  }*/

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

.tariff-card
{
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 24px;
}

.title-card
{
  color: #FF9900;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
}

.tariff-card .price
{
  font-weight: 700;
  color: rgba(0, 0, 0, 0.56);
  margin-bottom: 40px;
}

.tariff-card .price-bold
{
  font-size: 32px;
  color: #000;
}

.tariff-card .list
{
  list-style: none;
  padding-left: 0;
}

.tariff-card .list .list-item
{
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
  padding-left: 30px;
  position: relative;
}

.tariff-card .list .list-item.none
{
  opacity: .3;
}

.icon-check
{
  position: absolute;
  display: inline-block;
  width: 14px;
  height: 10px;
  left: 0;
  top: 6px;
}

.icon-check:before
{
  position: absolute;
  left: -4px;
  top: 10%;
  height: 80%;
  width: 2px;
  background-color: #000;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 10px 10px 0 0;
}

.icon-check:after
{
  position: absolute;
  left: -4px;
  top: 68%;
  height: 2px;
  width: 80%;
  background-color: #000;
  content: "";
  transform: translateX(10px) rotate(-45deg);
  transform-origin: left bottom;
  border-radius: 0 10px 10px 0;
}

.icon-close {
  position: absolute;
  left: 2px;
  top: 3px;
  width: 12px;
  height: 12px;
}

.icon-close:before,
.icon-close:after {
  position: absolute;
  left: 5px;
  content: '';
  height: 14px;
  width: 2px;
  background-color: #000;
  border-radius: 10px;
}

.icon-close:before {
  transform: rotate(45deg);
}

.icon-close:after {
  transform: rotate(-45deg);
}

.input-container
{
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
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

.card-button
{
  display: block;
  text-decoration: none;
  text-align: center;
  color: #FF9900;
  background-color: rgba(255, 153, 0, 0.16);
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  margin-top: 16px;
  cursor: pointer;
  border: none;
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
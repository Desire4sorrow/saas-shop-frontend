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
          <div class="modal-title">Выберите способ оплаты</div>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close" @click="close()"></button>
        </div>
        <div class="modal-body">
          <div class="input-container">
            <div class="title">Кол-во лицензий:</div>
            <div class="input-control">
              <div class="control-minus" @click="countMinus()"></div>
              <input class="input"
                     type="number" name="count" min="1" :max="maxLicenses" :value="countLicensesLocal">
              <div class="control-plus" @click="countPlus()"></div>
            </div>
          </div>
          <div class="input-warning" :class="{active: this.active}">
            <div class="image-container">
              <img class="image" src="@/assets/image/icon/warning.svg" alt="">
            </div>
            <div class="title">
              Если вы уменьшите количество лицензий,
              некоторые пользователи потеряют доступ к лицензионным функциям.
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn button-close" data-bs-dismiss="modal" @click="close()">Отменить</button>
          <button type="button" class="btn button-check" ref="buttonChanged" disabled>Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductChangeTariff',
}
</script>

<style scoped>
.modal-dialog
{
  max-width: 600px;
  margin-top: 200px;
}

.modal-body
{
  background-color: #F5F5F5;
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
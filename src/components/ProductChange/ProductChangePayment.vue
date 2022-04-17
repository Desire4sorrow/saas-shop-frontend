<template>
  <div class="col-xl-4">
    <button type="button" class="change-card" data-bs-toggle="modal" data-bs-target="#modalChangePayment">
      <span class="title">Изменить способ оплаты</span>
      <span class="image-container">
        <img class="image" src="@/assets/image/icon/credit-card.svg" alt="">
      </span>
    </button>
  </div>

  <div class="modal fade" id="modalChangePayment" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Выберите способ оплаты</div>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label class="card-payment-container">
            <span class="image-container">
              <img src="@/assets/image/icon/credit-card.svg" alt="" class="image">
            </span>
            <span class="data-container">
              <span class="title">Банковская карта</span>
              <span class="subtitle">Оплата картой на сайте</span>
            </span>
            <input type="radio" name="methodPayment"
                   class="payment-input" value="bank_card"
                   v-model="methodPaymentLocal" @change="changeMethod()">
          </label>
<!--          <label class="card-payment-container">
            <span class="image-container">
              <img src="@/assets/image/icon/file.svg" alt="" class="image">
            </span>
            <span class="data-container">
              <span class="title">Расчётный счёт</span>
              <span class="subtitle">Выставим счёт оферту для оплаты через расчётный счёт</span>
            </span>
            <input type="radio" name="methodPayment"
                   class="payment-input" value="details_payment"
                   v-model="methodPaymentLocal" @change="changeMethod()">
          </label>-->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn button-close" data-bs-dismiss="modal">Отменить</button>
          <button type="button" class="btn button-check" ref="buttonChanged" disabled>Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductChangePayment',
  props: ['methodPayment'],
  data() {
    let methodPaymentLocal = this.methodPayment;

    return { methodPaymentLocal }
  },
  methods: {
    changeMethod: function () {
      if (this.methodPaymentLocal !== this.methodPayment) return this.$refs.buttonChanged.disabled = false;
      return this.$refs.buttonChanged.disabled = true;
    }
  }
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

.card-payment-container
{
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 24px 54px 24px 24px;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}

.card-payment-container:not(:last-child)
{
  margin-bottom: 16px;
}

.image-container
{
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image
{
  max-width: 100%;
}

.data-container
{
  margin-left: 16px;
  margin-right: 10px;
}

.title
{
  font-weight: 500;
  display: block;
}

.subtitle
{
  font-weight: 500;
  font-size: 12px;
  opacity: .5;
  display: block;
}

.payment-input {
  position: absolute;
  right: 34px;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.payment-input::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 3px solid rgba(0, 0, 0, 0.56);
}

.payment-input:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #FF9900;
  transform: translate(-50%, -50%);
  visibility: visible;
}

.payment-input:checked::before {
  border-color: #FF9900;
}
</style>
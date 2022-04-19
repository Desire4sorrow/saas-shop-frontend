<template>
  <div class="bank-card">
    <div class="card-data">
      <div class="image-container">
        <img :src="imagePath()" alt="" class="image">
      </div>
    </div>
    <button type="button" class="btn button-card">
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      dataCard: [
        { name: 'VISA', image: '@/assets/image/icon/vise.svg'},
        { name: 'MASTERCARD', image: '@/assets/image/icon/mastercard.svg'},
        { name: 'MIR', image: '@/assets/image/icon/mir.svg'}
      ]
    }
  },
  methods: {
    imagePath: function () {

      for (let cardEl in this.card){
        this.dataCard.forEach((el) => {
          console.log(cardEl, el)
          if (cardEl.payment_system === el.name){
            return el.image
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.bank-card
{
  background: #fff;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-container
{
  width: 40px;
  min-width: 40px;
  height: 40px;
  background-color: #F5F5F5;
  border-radius: 100px;
}

.image{
  max-width: 100px;
}

.button-card
{
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.56);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
</style>
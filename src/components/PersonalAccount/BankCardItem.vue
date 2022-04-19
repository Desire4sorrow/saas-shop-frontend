<template>
  <div class="bank-card">
    <div class="card-data">
      <div class="image-container">
        <img :src="imagePath()" alt="" class="image">
      </div>
      <div class="title">
        {{ inputTitle() }}
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
        { name: 'VISA', image: './assets/image/icon/vise.svg'},
        { name: 'MASTERCARD', image: './assets/image/icon/mastercard.svg'},
        { name: 'MIR', image: './assets/image/icon/mir.svg'}
      ]
    }
  },
  methods: {
    imagePath: function () {
      let imagePath = ''
      for (let cardEl in this.card){
        this.dataCard.forEach((el) => {
          if (this.card[cardEl] === el.name){
            imagePath = el.image
          }
        })
      }
      return imagePath
    },
    inputTitle: function () {
      let name = ''
      for (let cardEl in this.card) {
        this.dataCard.forEach((el) => {
          if (this.card[cardEl] === el.name) {
            name = el.name[0] + el.name.substring(1).toLowerCase()
          }
        })
      }
      return name
    },
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 100px;
}

.title
{
  font-weight: 500;
  margin-left: 16px;
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

.card-data
{
  display: flex;
  align-items: center;
}
</style>
<template>
  <div class="product-cards-container">
    <div class="title">Банковские карты</div>
      <BankCardItem v-for="el in cardList" :key="el" :card="el" :deleteCard="deleteCard"/>
      <button type="button" class="btn add-card">
        Добавить карту
      </button>
  </div>
</template>

<script>
import {HTTP} from "@/config";
import BankCardItem from '@/components/PersonalAccount/BankCardItem.vue'

export default {
  inject: ['$keycloak'],
  components: {
    BankCardItem,
  },
  data() {
    return {
      cardList: []
    }
  },
  created() {
    HTTP.get('/card_binding/list ', {
      headers: {
        authorization: 'Bearer ' + this.$keycloak.token,
      }
    }).then((res) => {
      res.data.forEach((el) => {
        this.cardList.push(el)
      })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    deleteCard: function (id) {
      let newArr = []
      this.cardList.forEach((el) => {
        if (el.card_binding_id !== id){
          newArr.push(el)
        }
      })
      this.cardList = newArr
    },
  }
}
</script>

<style scoped>
.product-cards-container .title
{
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
}

.add-card
{
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.56);
  width: 100%;
  padding: 13px;
}

.add-card:hover
{
  background-color: rgba(0, 0, 0, .1);
}
</style>
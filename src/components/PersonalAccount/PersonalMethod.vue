<template>
  <div class="product-cards-container">
    <div class="title">Банковские карты</div>

  </div>
</template>

<script>
import {HTTP} from "@/config";

export default {
  data() {
    return {
      cardList: []
    }
  },
  created() {
    HTTP.get('/card_binding/list ')
        .then((res) => {
          res.data.forEach((el) => {
            this.cardList.push(el)
          })
        })
        .catch()
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
</style>
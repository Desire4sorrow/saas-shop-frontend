<template>
  <div class="container product-container">
    <template v-if="productList.length">
      <ProductContainer :productList="productList"/>
    </template>
    <template v-else>
      <EmptyContainer />
    </template>
  </div>
</template>

<script>
import {HTTP} from "@/config";
import EmptyContainer from "@/components/EmptyContainer";
import ProductContainer from "@/components/ProductContainer";

export default {
  name: 'BodyPage',
  components: {
    ProductContainer,
    EmptyContainer
  },
  data() {
    return {
      productList: []
    }
  },
  created() {
    HTTP.get('/workspace/list')
        .then(response => {
          response.data.forEach((el) => {
            this.productList.push(el)
          })
        })
  }
}
</script>

<style scoped>
.product-container
{
  padding: 40px 0;
}
</style>
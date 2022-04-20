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
    HTTP.get('/workspace/list', {
      headers: {
        authorization: 'Bearer ' + window.keycloak.token,
      }
    }).then(response => {
      console.log(response)
        response.data.forEach((el) => {
          this.productList.push(el)
        })
      }).catch((error) => {
      console.log(error)
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
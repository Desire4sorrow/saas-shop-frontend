<template>
  <div class="container product-container">
    <div class="spinner-container" v-if="status">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <template v-if="!status">
      <template v-if="productList.length">
        <ProductContainer :productList="productList"/>
      </template>
      <template v-else>
        <EmptyContainer />
      </template>
    </template>
  </div>
</template>

<script>
import {HTTP} from "@/config";
import EmptyContainer from "@/components/EmptyContainer";
import ProductContainer from "@/components/ProductContainer";

export default {
  components: {
    ProductContainer,
    EmptyContainer
  },
  inject: ['$keycloak'],
  data() {
    return {
      productList: [],
      status: true,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList: function () {
      this.status = true

      HTTP.get('/workspace/list', {
        headers: {
          authorization: 'Bearer ' + this.$keycloak.token,
        }
      }).then(response => {
        this.status = false
        response.data.forEach((el) => {
          this.productList.push(el)
        })
      }).catch((error) => {
        this.status = false
        console.log(error)
      })
    }
  },
}
</script>

<style scoped>
.spinner-container
{
  margin-top: 130px;
  text-align: center;
}

.spinner-border
{
  color: #FF9900;
  width: 50px;
  height: 50px;
}

.product-container
{
  padding: 40px 0;
}
</style>
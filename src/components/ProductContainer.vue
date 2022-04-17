<template>
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <ProductCardItem v-for="product in productList"
                       :key="product.user_id"
                       :active="productSelected === product"
                       :onclick="onclickProduct"
                       :product="product" />
      <a class="btn button-product-addition" href="#">
        Добавить продукт
      </a>
    </div>
    <div class="col-md-9">
      <ProductItemData
          :key="productSelected"
          :product="productSelected"/>
    </div>
  </div>
</template>

<script>
import ProductCardItem from "@/components/ProductCardItem";
import ProductItemData from "@/components/ProductItemData";

export default {
  name: 'ProductContainer',
  components: {
    ProductItemData,
    ProductCardItem,
  },
  props: ['productList'],
  data() {
    return {
      productSelected: this.productList[0],
    }
  },
  methods: {
    onclickProduct: function (count) {
      this.productSelected = count;
      console.log(this.productList)
    }
  }
}
</script>

<style scoped>
.button-product-addition {
  width: 100%;
  padding: 12px 4px;
  border: 1px solid rgba(0, 0, 0, .12);
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.56);
}

.button-product-addition:hover {
  background: #edeff0;
  color: rgba(0, 0, 0, 0.76);
}
</style>
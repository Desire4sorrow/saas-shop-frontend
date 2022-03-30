<template>
    <div>
        <lk-products-list />
        <lk-add-product-button />
    </div>
</template>

<script>
import LkAddProductButton from './LkAddProductButton.vue'
import LkProductsList from './LkProductsList.vue'
export default {
  components: { LkAddProductButton, LkProductsList },

}
</script>

<style scoped>

</style>
<template>
    <div>
        <lk-active-product-item />
        <lk-product-item />
        <lk-product-item />
    </div>
</template>

<script>
import LkActiveProductItem from './LkActiveProductItem.vue'
import LkProductItem from './LkProductItem.vue'
export default {
    components: { LkProductItem, LkActiveProductItem },

}
</script>

<style scoped>

</style>
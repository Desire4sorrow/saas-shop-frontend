<template>
    <div class="background">
        <div class="container content">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <lk-products-section />
                </div>
                <div class="col-md-9">
                    <lk-product-info />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LkProductInfo from './LkProductInfo.vue'
import LkProductsSection from './LkProductsSection.vue'

export default {
  components: { LkProductInfo, LkProductsSection },
    
}
</script>

<style>
.element {
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 5px;
    background: white;
}
</style>

<style scoped>
.background {
    background: #F7F8F9;
    height: 100%;
    flex: 1 1 auto;
    flex-wrap:wrap;
    width: 100%;
}

.content {
    margin-top: 41px;
    max-width: 1360px;
}
</style>
<template>
    <h3 class="section-title">Счета и документы</h3>
    <div class="row">
        <div class="col-sm-4">
            <lk-bills-item />
        </div>
        <div class="col-sm-4">
            <lk-bills-item />
        </div>
        <div class="col-sm-4">
            <lk-bills-item />
        </div>
    </div>
</template>

<script>
import LkBillsItem from './LkBillsItem.vue'
export default {
  components: { LkBillsItem },

}
</script>

<style scoped>

</style>
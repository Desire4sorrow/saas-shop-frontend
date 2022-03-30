<template>
    <div>
        <h3 class="section-title">Действия</h3>
        <div class="row">
            <div class="col-sm-4">
                <lk-actions-item />
            </div>
            <div class="col-sm-4">
                <lk-actions-item />
            </div>
            <div class="col-sm-4">
                <lk-actions-item />
            </div>
        </div>
    </div>
</template>

<script>
import LkActionsItem from './LkActionsItem.vue'
export default {
  components: { LkActionsItem },

}
</script>

<style scoped>

</style>
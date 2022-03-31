<template>
    <div>
        <h3 class="section-title">Действия</h3>
        <div class="row">
            <div class="col-sm-4">
                <lk-actions-item
                    :caption="add_licenses_caption"
                />
            </div>
            <div class="col-sm-4">
                <lk-actions-item
                    :caption="change_tariff_caption"
                />
            </div>
            <div class="col-sm-4">
                <lk-actions-item
                    :caption="payment_method_caption"
                />
            </div>
        </div>
    </div>
</template>

<script>
import LkActionsItem from './LkActionsItem.vue'
export default {
    components: { LkActionsItem },
    props: {
        change_tariff_caption: String,
        add_licenses_caption: String,
        payment_method_caption: String
    }
}
</script>

<style scoped>

</style>
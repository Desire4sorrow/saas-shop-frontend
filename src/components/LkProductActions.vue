<template>
    <div>
        <h3 class="section-title">Действия</h3>
        <div class="row">
            <div class="col-sm-4" @click="showModal">
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
    <modal-window ref="modal"></modal-window>
</template>

<script>
import LkActionsItem from './LkActionsItem.vue'
import ModalWindow from './LkTariffSelect.vue'
export default {
    components: { LkActionsItem, ModalWindow },
    props: {
        change_tariff_caption: String,
        add_licenses_caption: String,
        payment_method_caption: String
    },
    methods: {
        showModal: function () {
            this.$refs.modal.show = true
        }
    }
}
</script>

<style scoped>

</style>
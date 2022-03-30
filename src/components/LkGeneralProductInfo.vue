<template>
    <div class="general-info element">
        <div class="row">
            <div class="col-4">
                <lk-info-item
                    caption="Тариф"
                    :body="tariff"
                />
                <lk-info-item
                    caption="Тип"
                    :body="type"
                />
            </div>
            <div class="col-4">
                <lk-info-item
                    caption="Цена"
                    :body="price"
                />
                <lk-info-item
                    caption="Общая сумма"
                    :body="total_sum"
                />
            </div>
            <div class="col-4">
                <lk-info-item
                    caption="Способ оплаты"
                    :body="payment_method"
                />
                <lk-info-item
                    caption="Следующая оплата"
                    :body="next_payment_date"
                />
            </div>
        </div>
    </div>
</template>

<script>
import LkInfoItem from './LkInfoItem.vue'
export default {
    components: { LkInfoItem },
    props: {
        tariff: String,
        type: String,
        price: String,
        total_sum: String,
        payment_method: String,
        next_payment_date: String
    }
}
</script>

<style scoped>
.general-info {
    padding: 12px;
}
</style>
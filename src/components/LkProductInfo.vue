<template>
    <div>
        <div class="general-info">
            <lk-general-product-info 
                :tariff="tariff"
                :type="type"
                :price="price"
                :total_sum="total_sum"
                :payment_method="payment_method"
                :next_payment_date="next_payment_date"
            />
        </div>
        <div class="actions">
            <lk-product-actions
                :add_licenses_caption="add_licenses_caption"
                :change_tariff_caption="change_tariff_caption"
                :payment_method_caption="payment_method_caption"
            />
        </div>
        <div class="bills">
            <lk-product-bills />
        </div>
    </div>
</template>

<script>
import LkGeneralProductInfo from './LkGeneralProductInfo.vue'
import LkProductActions from './LkProductActions.vue'
import LkProductBills from './LkProductBills.vue'
export default {
    components: { LkGeneralProductInfo, LkProductActions,
    LkProductBills },
    data() {
        return {
            tariff: 'Профессиональный',
            type: 'Годовой',
            price: '3 000 ₽ / лицензия',
            total_sum: '30 000 ₽',
            payment_method: 'Расчётный счёт',
            next_payment_date: '26 августа 2021',

            change_tariff_caption: 'Изменить тариф',
            add_licenses_caption: 'Добавить лицензии',
            payment_method_caption: 'Способ оплаты'
        }
    }
}
</script>

<style scoped>
.section-title {
    margin-bottom: 8px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.87);
}

.general-info {
    margin-bottom: 32px;
}

.actions {
    margin-bottom: 32px;
}

.bills {
    margin-bottom: 40px;
}
</style>
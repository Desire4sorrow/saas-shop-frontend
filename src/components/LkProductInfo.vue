<template>
    <div>
        <div class="general-info">
        </div>
        <div class="actions">
        </div>
        <div class="bills">
            <lk-product-bills />
        </div>
    </div>
</template>

<script>
import LkProductBills from './LkProductBills.vue'
export default {
    components: {
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
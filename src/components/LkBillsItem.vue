<template>
    <div class="element bills-item">
        <div class="bill-general-info">
            <div class="date-and-sum">
                <div class="date caption">26 августа 2021</div>
                <div class="sum">30 000 ₽</div>
            </div>
            <a class="bill_menu_btn" href="#">
                <div class="bill_menu_btn_decoration">
                    <div class="dots-container">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </a>
        </div>
        <div class="divider"></div>
        <div class="details">
            <div class="details-list">
                <div class="captions-list">
                    <div class="caption">Тариф</div>
                    <div class="caption">Тип</div>
                    <div class="caption">Цена</div>
                    <div class="caption">Лицензий</div>
                    <div class="caption">Способ оплаты</div>
                </div>
                <div class="bodies-list">
                    <div class="caption item-body">Профессиональный</div>
                    <div class="caption item-body">Годовой</div>
                    <div class="caption item-body">3 000 ₽ / лицензия</div>
                    <div class="caption item-body">10</div>
                    <div class="caption item-body">Расчётный счёт</div>
                </div>


                <!-- <div class="details-item">
                    <div class="caption">Тариф</div>
                    <div class="caption item-body">Профессиональный</div>
                </div>
                <div class="details-item">
                    <div class="caption">Тип</div>
                    <div class="caption item-body">Годовой</div>
                </div>
                <div class="details-item">
                    <div class="caption">Цена</div>
                    <div class="caption item-body">3 000 ₽ / лицензия</div>
                </div>
                <div class="details-item">
                    <div class="caption">Лицензий</div>
                    <div class="caption item-body">10</div>
                </div>
                <div class="details-item">
                    <div class="caption">Способ оплаты</div>
                    <div class="caption item-body">Расчётный счёт</div>
                </div> -->
            </div>
            <a href="#" class="payment-state-btn unpaid">Оплатить</a>
            <!-- <a class="payment-state-btn confirmation">Ожидание подтверждения</a> -->
            <!-- <a class="payment-state-btn paid">Оплачен</a> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.caption {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.56);
    margin-bottom: 16px;
}

.date {
    margin: 0;
}

.sum {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.87);
}

.bill_menu_btn {
    display: inline-block;
}

.bill_menu_btn_decoration {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.bill_menu_btn_decoration:hover {
    background: rgba(0, 0, 0, .06);
}

.bill-general-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.dots-container {
    width: 18px;
    display: flex;
    justify-content: space-between;
}

.dot {
    background: rgba(0, 0, 0, 0.56);
    width: 4px;
    height: 4px;
    border-radius: 50%;
}

.divider {
    height: 1px;
    background: rgba(0, 0, 0, .12);
}

.details {
    padding: 16px;
}

.details-list {
    display: flex;
    margin-bottom: 8px;
}

.captions-list {
    margin-right: 16px;
}

.details-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.item-body {
    color: rgba(0, 0, 0, 0.87);
}

.payment-state-btn {
    display: block;
    height: 40px;
    border-radius: 5px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.unpaid {
    background: #FF9900;
    color: #FFFFFF;
}

.confirmation {
    background: #F5F5F5;
    color: rgba(0, 0, 0, 0.56);
}

.paid {
    background: #EEF9E8;
    color: #6DCC3D;
}
</style>
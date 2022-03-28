<template>
    <div class="background">
        <div class="container content">
            <div class="row">
                <div class="col-md-3 col-sm-6 products-list">
                    <div class="active-product">

                    </div>
                    <div class="product element">

                    </div>
                    <div class="product element">

                    </div>
                    <div class="add-product-button">
                        <div class="add-product-caption">Добавить продукт</div>
                    </div>
                </div>
                <div class="col-md-9 info">
                    <div class="general-info element">
                        <div class="row">
                            <div class="col-4">
                                <div class="info-item">
                                    <div class="info-item__caption">Тариф</div>
                                    <div class="info-item__body">Профессиональный</div>
                                </div>
                                <div class="info-item">
                                    <div class="info-item__caption">Тип</div>
                                    <div class="info-item__body">Годовой</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="info-item">
                                    <div class="info-item__caption">Цена</div>
                                    <div class="info-item__body">3 000 ₽ / лицензия</div>
                                </div>
                                <div class="info-item">
                                    <div class="info-item__caption">Общая сумма</div>
                                    <div class="info-item__body">30 000 ₽</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="info-item">
                                    <div class="info-item__caption">Способ оплаты</div>
                                    <div class="info-item__body">Расчётный счёт</div>
                                </div>
                                <div class="info-item">
                                    <div class="info-item__caption">Следующая оплата</div>
                                    <div class="info-item__body">26 августа 2021</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="actions">
                        <h3 class="section-title">Действия</h3>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="element actions-item"></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="element actions-item"></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="element actions-item"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bills">
                        <h3 class="section-title">Счета и документы</h3>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="element bills-item"></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="element bills-item"></div>
                            </div>
                            <div class="col-sm-4">
                                <div class="element bills-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

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

.element {
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 5px;
    background: white;
}

.products-list {
    
}

.active-product {
    height: 230px;
    background: #FF9900;
    border-radius: 5px;
    margin-bottom: 16px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.product {
    height: 88px;
    margin-bottom: 8px;
}

.add-product-button {
    display: flex;
    align-items: center;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, .12);
    border-radius: 5px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.56);
}

.add-product-caption {
    margin: auto;
}

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

.actions {
    margin-bottom: 32px;
}

.actions-item {
    height: 72px;
}

.bills {
    margin-bottom: 40px;
}

.bills-item {
    height: 321px;
}

.info {
}

.general-info {
    padding: 12px;
    margin-bottom: 32px;
}

.info-item {
    padding: 12px;
}

.info-item__caption {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.56);
}

.info-item__body {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: rgba(0, 0, 0, 0.87);
}
</style>
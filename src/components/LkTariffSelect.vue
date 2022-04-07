<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="element modal-window">
            <div class="element modal-header">
                <h3 class="section-title">Выберите тариф</h3>
                <label class="checkbox">Месячный
                    <input type="checkbox" @click="monthlyTariff" :checked="(this.monthly == true)">
                    <span class="checkbox-switch"></span>
                </label>
                <label class="checkbox">Годовой
                    <input type="checkbox" @click="yearlyTariff" :checked="(this.monthly == false)">
                    <span class="checkbox-switch"></span>
                </label>
            </div>
            <div class="row">
                <div class="col">
                    <div class="element pricingTable">
                        <h3 class="title">Базовый</h3>
                        <div class="price-value">{{basePrice}} ₽<div class="license">/лицензия</div></div>
                        <ul class="pricing-content-select">
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                        </ul>
                        <ul class="pricing-content-unselect">
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                        </ul>
                        <div class="element licenseQuantity">Количество лицензий
                            <div class="quantity_inner">        
                                <button class="mark-button" @click="decrementValue('base')">-</button>
                                {{baseCnt}}
                                <button class="mark-button" @click="incrementValue('base')">+</button>
                            </div>
                        </div>
                        <a href="#" class="payment-state-btn unpaid" @click="closeModal">Купить за {{baseSumm}}</a>
                    </div>
                </div>

                <div class="col">
                    <div class="element pricingTable">
                        <h3 class="title">Премиум</h3>
                        <div class="price-value">{{advancedPrice}} ₽<div class="license">/лицензия</div></div>
                        <ul class="pricing-content-select">
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                            <li>Преимущество</li>
                        </ul>
                        <div class="element licenseQuantity">Количество лицензий
                            <div class="quantity_inner">        
                                <button class="mark-button" @click="decrementValue('advanced')">-</button>
                                {{advancedCnt}}
                                <button class="mark-button" @click="incrementValue('advanced')">+</button>
                            </div></div>
                        <a href="#" class="payment-state-btn unpaid" @click="closeModal">Купить за {{advancedSumm}}</a>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: "ModalWindow",
        components: { },
        data: function () {
            return {
                monthly: true,
                basePrice: 1500, 
                baseCnt: 1,
                advancedPrice: 6500,
                advancedCnt: 1,
                baseSumm: 1500,
                advancedSumm: 6500,
                show: false
            }
        },
        methods: {
            closeModal: function () {
                this.show = false
            },
            incrementValue: function (value) {
                if (value == 'base')
                    this.baseCnt++
                if (value == 'advanced')  
                    this.advancedCnt++
                this.updateSumm()
            },
            decrementValue: function (value) {
                if (value == 'base')
                    if (this.baseCnt > 1)  
                    this.baseCnt--
                if (value == 'advanced')
                    if (this.advancedCnt > 1)  
                        this.advancedCnt--
                this.updateSumm()
            },
            updateSumm: function () {
                this.baseSumm = this.basePrice * this.baseCnt
                this.advancedSumm = this.advancedPrice * this.advancedCnt
            },
            yearlyTariff: function () {
                this.monthly = false
                this.advancedPrice *= 12
                this.basePrice *= 12
                this.updateSumm()    
            },
            monthlyTariff: function () {
                this.monthly = true
                this.advancedPrice /= 12
                this.basePrice /= 12
                this.updateSumm()    
            }
        }
    }
</script>

<style scoped>
.modal-shadow {
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    background: rgba(0, 0, 0, 0.39);
}

.modal-window {
    position: absolute;
    width: 40%;
    height: 55%;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;
}

.pricing-content-unselect {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 13;
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;
}

.pricing-content-unselect li:before {
    content: 'x';
    margin: 10px;
    position: relative;
}

.pricing-content-select li:before {
    content: '✔';
    margin: 10px;
    position: relative;
}

.pricing-content-select {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 13;
    color: rgba(0, 0, 0, 0.95);
    margin-bottom: 10px;
}

.mark-button {
    display: inline-block; 
    border-radius: 5px;
    font-size: 25px;
    outline: none;
    border: none;
    background: #FFFFFF;
}

.quantity_inner {
    display: inline-block; 
    font-family: 'Manrope';
    font-style: normal;
    font-size: 20px;
}

.license {
    display: inline-block;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.56);
    margin-bottom: 16px;
}

.price-value {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: rgba(0, 0, 0, 0.87);
}

.title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #FF9900;;
}

.licenseQuantity
{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin-bottom: 16px;
}

.pricingTable {
    padding: 20px;
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
    background: #FFEED6;
    color: #FF9900;
}

ul{
    list-style: none;
}
ul > li{
    position: relative;
    margin: 10px;
}

.checkbox {
	display: inline-block;    
	height: 28px;    
	line-height: 28px;  
	margin-right: 10px;      
	position: relative;
	vertical-align: middle;
	user-select: none;	
}

.checkbox .checkbox-switch {
	position: relative;	
	display: inline-block;
	box-sizing: border-box;			
	width: 56px;	
	height: 28px;
	border: 1px solid rgba(0, 0, 0, .1);
	border-radius: 25%/50%;	
	vertical-align: top;
	background: #eee;
	transition: .2s;
}

.checkbox .checkbox-switch:before {
	content: '';
	position: absolute;
	top: 1px;
	left: 1px;	
	display: inline-block;
	width: 24px;	
	height: 24px;
	border-radius: 50%;
	background: white;
	box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
	transition: .15s;
}

.checkbox input[type=checkbox] {
	display: block;	
	width: 0;
	height: 0;	
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.checkbox input[type=checkbox]:not(:disabled):active + .checkbox-switch:before {
	box-shadow: inset 0 0 2px rgba(0, 0, 0, .3);
}

.checkbox input[type=checkbox]:checked + .checkbox-switch {
	background: #FF9900;
}

.checkbox input[type=checkbox]:checked + .checkbox-switch:before {
	transform:translateX(28px);
}

</style>
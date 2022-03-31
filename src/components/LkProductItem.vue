<template>
    <a href="#" class="product-item">
        <div
            class="element product"
            v-bind:class="{active: isActive}" 
            v-on:click="isActive =! isActive"
        >
            <div class="product-info">
                <div class="title-and-address" :class="{ 'title-and-address-active': isActive }">
                    <div>
                        <div class="title" :class="{ 'title-active': isActive }">Стройконтроль</div>
                        <div class="caption" :class="{ 'caption-active': isActive }">a101.sk.ru</div>
                    </div>
                    <a href="##" class="link" :class="{ 'link-active': isActive }"></a>
                </div>
                <div class="status" :class="{ hidden: !isActive }">
                    <div class="caption caption-active">Статус</div>
                    <div class="body">Активно</div>
                </div>
                <div class="licenses-used" :class="{ hidden: !isActive }">
                    <div class="caption caption-active">Используется лицензий</div>
                    <div class="body">8 из 10</div>
                    <div class="progress licenses-progress" style="height: 6px;">
                        <div class="progress-bar licenses-progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    data() {
        return {
            isActive: false
        }
    }
}
</script>

<style scoped>
.product-item {
    display: block;
    text-decoration: none;
}

.product {
    margin-bottom: 8px;
}

.active {
    background: #FF9900;
    border-radius: 5px;
    margin-bottom: 16px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
}

.product-info {
    padding: 16px 24px 24px;
}

.title-and-address {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-and-address-active {
    margin-bottom: 20px;
}

.link {
    display: block;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.56);
}

.link-active {
    border-color: rgba(255, 255, 255, 0.72); 
}

.status {
    margin-bottom: 20px;
}

.title {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: rgba(0, 0, 0, 0.87);
}

.title-active {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
}

.caption {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: rgba(0, 0, 0, 0.56);
}

.caption-active {
    color: rgba(255, 255, 255, 0.72);
}

.body {
    margin-top: 4px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
}

.licenses-progress {
    background: rgb(255, 255, 255, 0.3);
    border-radius: 100px;
    margin-top: 8px;
}

.licenses-progress-bar {
    background: #FFFFFF;
}

.hidden {
    display: none;
}
</style>
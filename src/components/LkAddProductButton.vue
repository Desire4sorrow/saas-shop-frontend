<template>
    <a class="add-product-button" href="#">
        <span class="add-product-caption">Добавить продукт</span>
    </a>
</template>

<script>
export default {

}
</script>

<style scoped>
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
    text-decoration: none;
}

.add-product-button:hover {
    background: #edeff0;
    color: rgba(0, 0, 0, 0.76);
}

.add-product-caption {
    margin: auto;
}
</style>
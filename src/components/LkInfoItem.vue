<template>
    <div class="info-item">
        <div class="info-item__caption">{{caption}}</div>
        <div class="info-item__body">{{body}}</div>
    </div>
</template>

<script>
export default {
    props: {
        caption: String,
        body: String
    }
}
</script>

<style scoped>
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
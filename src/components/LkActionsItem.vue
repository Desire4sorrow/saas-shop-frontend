<template>
    <div class="action-item-container">
        <a class="element actions-item" href="#">
            <span class="action-caption">{{caption}}</span>
            <div class="action-icon">{{icon}}</div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        caption: String,
        icon: String
    }
}
</script>

<style scoped>
.action-item-container {
    height: 100%;
}

.actions-item {
    height: 100%;
    padding: 15px 23px 15px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
}

.action-caption {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: rgba(0, 0, 0, 0.87);
}

.action-icon {
    display: inline-block;
    background: #F5F5F5;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
<template>
    <nav class="navbar navbar-light">
        <a class="navbar-brand logo" href="#">
            <img src="@/assets/image/logo.png" width="30" height="30" class="d-inline-block align-top logo-img" alt="" />
            <div class="logo-name">Мобильные решения для строительства</div>
        </a>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo {
    width: 210px;
    display: flex;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.56);
}

.logo-img {
    margin-right: 11px;
}

.logo-name {
    display: inline-block;
    white-space: break-spaces;
}
</style>
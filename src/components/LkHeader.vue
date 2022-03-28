<template>
    <div class="container-fluid lk-header">
        <!-- <div class="logo"></div> -->
        <!-- Image and text -->
        <div>
            <nav class="navbar navbar-light">
                <a class="navbar-brand logo" href="#">
                    <img src="@/assets/image/logo.png" width="30" height="30" class="d-inline-block align-top logo-img" alt="" />
                    <div class="logo-name">Мобильные решения для строительства</div>
                </a>
            </nav>
        </div>
        <nav-bar />
        <div class="avatar"></div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar"
export default {
    components: {
        NavBar
    }
}
</script>

<style scoped>
.lk-header {
    display: flex;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: 64px;
    border: 1px solid #E0E0E0;
    border-left: none;
    border-right: none;
    background: white;
}

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

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgb(255, 188, 112);
    display: inline-block;
}
</style>
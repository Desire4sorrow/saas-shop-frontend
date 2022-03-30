<template>
    <div class="container-fluid lk-header">
        <lk-header-logo />
        <nav-bar />
        <div class="avatar"></div>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import LkHeaderLogo from './LkHeaderLogo.vue'
export default {
    components: {
        NavBar, 
        LkHeaderLogo
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

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgb(255, 188, 112);
    display: inline-block;
}
</style>
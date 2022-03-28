<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-font">
                <li class="nav-item">
                    <a class="nav-link" href="#">Продукты</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Решения</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Разработка</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">О нас</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nav {
    height: 100%;
    border: 1px solid green;
    display: inline-block;
}

.nav-font {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.468947px;
    color: rgba(0, 0, 0, 0.56);
}

.nav_link {
    height: 100%;
    padding: 0 13px;
    display: inline-block;
    text-decoration: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.468947px;
    color: rgba(0, 0, 0, 0.56);
}
</style>
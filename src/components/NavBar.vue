<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3  nav-font">
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
            </div>
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
<template>
    <nav>
        <div class="container-fluid navbar-r">
        <span class="nav-text">Реквизиты для оплаты</span>
    </div>
    </nav>
    <div class="form-r">
        <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Название организации</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите название организации">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">ОГРН</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Введите ОГРН">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">ИНН</label>
            <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Введите ИНН">
        </div>
        <div class="mb-3">
            <label for="formGroupExampleInput4" class="form-label">КПП</label>
            <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Введите КПП">
        </div>    
        <div class="mb-3">
            <label for="formGroupExampleInput5" class="form-label">Юридический адрес</label>
            <input type="text" class="form-control" id="formGroupExampleInput5" placeholder="Введите юридический адрес">
        </div>
    </div>
    <div class="btn-rr">
        <a class="btn btn-r btn-primary" href="#" role="button">Сформировать счёт</a>
    </div>    
</template>

<script>
export default {
    name: 'PaymentDetails',
}
</script>

<style scoped>
.nav {
    height: 100%;
    border: 1px solid green;
    display: inline-block;
}

.btn-r {
    width: 600px; 
}

.btn-rr {
    width: 600px;
    margin: 0 auto 0 auto;  
    justify-content:center;
    align-items: center; 
}

.form-r {
    width: 600px;
    height: 496px;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    margin: 41px auto 0 auto;
    justify-content:center;
    align-items: center;
}

.navbar-r {
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items: center;
    background: #FFFFFF;
    padding: 16px 0 16px 0;
    border-bottom: 1px solid #E0E0E0;
}

.nav-text {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.468947px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    text-align: center;
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

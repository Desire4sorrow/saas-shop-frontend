<template>
  <div class="container">
    <form class="form-details">
      <div class="form-container">
        <div class="form-group">
          <label class="form-label">
            <span class="title">Название организации</span>
            <input type="text" class="form-control" placeholder="Введите название организации" required>
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ОГРН</span>
            <input type="text" class="form-control" placeholder="Введите ОГРН" required>
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">ИНН</span>
            <input type="text" class="form-control" placeholder="Введите ИНН" required>
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">КПП</span>
            <input type="text" class="form-control" placeholder="Введите КПП" required>
          </label>
        </div>
        <div class="form-group">
          <label class="form-label">
            <span class="title">Юридический адрес</span>
            <input type="text" class="form-control" placeholder="Введите юридический адрес" required>
          </label>
        </div>
      </div>
      <button class="btn button-details" role="button">Сформировать счёт</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'PaymentDetails',
}
</script>

<style scoped>
.form-details {
  width: 600px;
  margin: 41px auto 0;
}

.form-details .form-container
{
  background: #fff;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  padding: 16px;
}

.form-group:not(:last-child)
{
  margin-bottom: 16px;
}

.form-label
{
  margin-bottom: 0;
  width: 100%;
}

.form-label .title
{
  font: 500 12px 'Manrope', sans-serif;
  margin-bottom: 8px;
  display: inline-block;
}

.form-control
{
  padding: 14px 16px;
}

.form-control:focus
{
  box-shadow: none;
  border-color: #ff9700;
}

.button-details
{
  background-color: #ff9700;
  color: #fff;
  font: 600 14px 'Manrope', sans-serif;
  width: 100%;
  padding: 12px 0;
  margin-top: 16px;
}

.button-details:hover
{
  background-color: #d98200;
}
</style>

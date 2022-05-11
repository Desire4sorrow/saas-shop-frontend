<template>
  <div class="form-details">
    <div class="form-container">
      <div class="form-group">
        <label class="form-label">
          <span class="title">Имя</span>
          <input type="text" class="form-control" placeholder="Введите имя">
        </label>
      </div>
      <div class="form-group">
        <label class="form-label">
          <span class="title">Фамилия</span>
          <input type="text" class="form-control" placeholder="Введите фамилию">
        </label>
      </div>
      <div class="form-group">
        <label class="form-label">
          <span class="title">Email</span>
          <input type="email" class="form-control" placeholder="Введите email">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
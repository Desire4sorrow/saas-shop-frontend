<template>
  <div class="empty-container">
    <div class="title">
      У вас пока нет ни одного продукта. Чтобы перейти на наш сайт и выбрать продукт, нажмите на кнопку.
    </div>
    <a href="https://mrspro.ru/" class="btn button">Добавить продукт</a>
  </div>
</template>

<script>
export default {
  name: 'EmptyContainer'
}
</script>

<style scoped>
.empty-container
{
  max-width: 400px;
  margin: 200px auto 0;
}

.empty-container .title
{
  font-weight: 500;
  color: rgba(0, 0, 0, 0.56);
}

.empty-container .button
{
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background-color: #FF9900;
  border-radius: 5px;
  padding-top: 6px;
  padding-bottom: 6px;
  width: 270px;
  margin: 32px auto 0;
  display: block;
  border: 2px solid #FF9900;
  transition: .5s;
}

.empty-container .button:hover
{
  background-color: transparent;
  color: #FF9900;
}
</style>
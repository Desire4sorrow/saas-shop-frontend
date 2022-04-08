<template>
  <div class="col-xl-4">
    <div class="title">{{ title }}</div>
    <div class="subtitle">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductDescriptionItem',
  props: ['title', 'subtitle'],
}
</script>

<style scoped>
.title
{
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.56);
  margin-bottom: 4px;
}

.subtitle
{
  font-weight: 500;
}
</style>
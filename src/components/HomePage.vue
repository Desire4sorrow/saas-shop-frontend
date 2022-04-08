<template>
  <HeaderPage />
  <BodyPage />
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue'
import BodyPage from "@/components/BodyPage";

export default {
  name: 'HomePage',
  components: {
    BodyPage,
    HeaderPage,
  }
}
</script>

<style scoped>

</style>

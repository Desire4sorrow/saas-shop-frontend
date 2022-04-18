<template>
  <div class="container profile-container">
    <div class="row">
      <div class="col-md-3">
        <PersonalCard v-for="el in this.$route.matched[0].children"
                      :key="el" :card="el"/>
      </div>
      <div class="col-md-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import PersonalCard from "@/components/PersonalAccount/PersonalCard";

export default {
  components: {
    PersonalCard
  }
}
</script>

<style scoped>
.profile-container
{
  padding: 40px 0;
}
</style>
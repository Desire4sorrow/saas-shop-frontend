<template>
    <div class="lk">
        <lk-header />
        <lk-content />
    </div>
</template>

<script>
import LkHeader from "@/components/LkHeader"
import LkContent from "@/components/LkContent"

export default {
    components: {
        LkHeader,
        LkContent
    },
    name: 'PersonalPage',
}
</script>

<style>
.lk {
    height: 100vh;
    display: flex;
    margin: 0 auto;
    flex-direction:column;
    align-items:stretch;
}
</style>
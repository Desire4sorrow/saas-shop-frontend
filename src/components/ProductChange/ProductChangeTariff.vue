<template>
  <div class="col-xl-4">
    <button type="button" class="change-card" data-bs-toggle="modal" data-bs-target="#modalChangeTariff">
      <span class="title">Изменить тариф</span>
      <span class="image-container">
        <img class="image" src="@/assets/image/icon/bill.svg" alt="">
      </span>
    </button>
  </div>

  <div class="modal fade" id="modalChangeTariff" data-bs-backdrop="static"
       data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Изменить тариф
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductChangeTariff',
}
</script>

<style scoped>

</style>
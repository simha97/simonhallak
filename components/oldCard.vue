<template>
  <div class="container">
    <div class="row">
      <!-- Use Bootstrap's col-* classes to control the card's width responsively -->
      <div class="col-md-4">
        <div class="card" style="width: 25rem;">
          <img class="card-img-top" :src="`/images/${imageName}.png`" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ tags }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ date }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'tags', 'date', 'imageName']);
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 200px; /* Adjust the height as per your requirement */
  object-fit: cover; /* Ensures the image covers the designated area, cropping as necessary */
}
</style>

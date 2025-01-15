<template>
  
      <div class="card my-4">
          <img class="img" :src="`/images/${imageName}.png`" alt="Card image cap">
      </div>
</template>

<script setup>
const props = defineProps(['imageName']);
</script>

<style scoped>

.card{
   width: 100%;
  max-width: 50rem;
  max-height: 40rem;
  margin: auto; /* margin-top, bottom: 0,  margin-left, margin-right: auto */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}



.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Larger shadow on hover */
  transform: scale(1.01); /* Slightly increase the size (10% larger) */
}
</style>

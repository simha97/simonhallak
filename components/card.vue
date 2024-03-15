<template>

<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="~\assets\images\2023-05-17 (1).png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{tags}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{date}}</li>
    </ul>
    
  </div>

</template>


<script setup>

  const props = defineProps(['title', 'tags', 'date']);

</script>

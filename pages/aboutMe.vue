<template>
  <div class="container row">
    <div class="text-section col-md-6 align-self-center">
      <h1 class="mx-3">A media technology engineer who loves to travel and discover the world and new cultures.</h1>
      <p class="mx-3">Expertise in web design, game development, and much more.</p>
    </div>
    <div class="image-section col-md-6 align-self-center">
      <!-- Replace 'path-to-image.jpg' with the actual path to your image -->
      <img src="/images/profilepic.jpg" alt="Fashion photography"></img>
    </div>
  </div>
  <div class="text-center my-5">
    <img src="/images/TimeLine.png" alt="time line" style="max-width: 100%; height: auto;"></img>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.text-section {
  padding: 0 1rem; /* Adjust padding as needed */
  text-align: center; /* Center text */
}

.text-section h1 {
  font-size: 1.5rem; /* Adjust the font size as needed */
  margin-bottom: 1rem;
}

.text-section p {
  font-size: 1rem;
  color: #666; /* This is just an example color */
}

.image-section img {
  max-width: 100%; /* Make the image responsive */
  height: auto;
}
</style>

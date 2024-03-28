<template>
  <div class="container my-5">
    <!-- Top Section -->
    <div class="row">
      <div class="col-md-6 my-auto">
        <div class="text-container fade-in" style="margin-left: 20px;">
          <p class="font-weight-bold text-center boldtext">A Media Technology engineer who loves new adventures</p>
          <p class="text-center">Just a simple guy who loves to learn, travel, culture, and pizza. <br><br>I've spent my time at university learning about different areas of digital design: including front-end development, app UX/UI, game development, and VR design. I have also gained valuable insights into entrepreneurship, leadership, and innovation. <br>I am currently working on my master's thesis in sleep enhancement by sounds.
            <br><br>In my free time, I enjoy spending time with people, walking in the forest, and petting all the cute dogs and cats.</p>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-end slide-in">
        <img src="/images/profilepic.jpg" alt="Personal Picture" class="img-fluid" style="margin-right: 20px; max-width: 90%; border-radius: 20px; box-shadow: 8px 10px 50px rgba(0, 0, 0, 0.5);">
      </div>
    </div>

    <div class="scroll-indicator">
    Scroll down for my Timeline<br> &blacktriangledown;
  </div>

    
    <div class="row mt-5">
      <div class="col-md-6">
        <img src="/images/TimeLine.png" alt="Left Side Image" class="img-fluid" style="margin-right: 10px; ">
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <img src="/images/Images.png" alt="Right Side Image" class="img-fluid" style="margin-left: 10px;">
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-weight-bold {
  font-weight: bold;
}
.boldtext {
  font-family: FreeMono, monospace;
  font-size: 20px;
}
.scroll-indicator {
  text-align: center;
  animation: bounce-text 2s infinite;
  font-size: 30px;
  margin-top: 60px;
}

@keyframes bounce-text {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.slide-in {
  animation: slideIn 1s ease-out forwards;
}

@media (max-width: 768px) {
  .font-weight-bold, .boldtext {
    font-size: 16px; /* Smaller font size on mobile */
  }
  .text-container, .slide-in img {
    margin-left: 0;
    margin-right: 0;
    max-width: 100%; /* Ensure images are not wider than the screen */
  }
  .scroll-indicator {
    font-size: 24px; /* Adjust size for better visibility on small screens */
    margin-top: 30px; /* Reduce margin */
  }
}

</style>



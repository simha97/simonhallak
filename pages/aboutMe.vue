<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-6 my-auto">
        <div class="text-container fade-in" style="margin-left: 20px;">
          <p class="boldtext text-center" aria-label="Personal Introduction">
            <b>A Media Technology engineer who loves new adventures</b>
          </p>
          <p class="text-center" aria-label="Experiences and hobbies">
            Just a simple guy who loves to learn, travel, culture, and pizza. <br><br>
            I've spent my time at university learning about different areas of digital design:
            including front-end development, app UX/UI, game development, and VR design. I have
            also gained valuable insights into entrepreneurship, leadership, and innovation.
            <br><br>
            In my free time, I enjoy spending time with people, walking in the forest, and petting
            all the cute dogs and cats.
          </p>
        </div>
      </div>
      <div class=" personal-image col-md-6 slide-in">
        <img 
          src="/images/profilepic.jpg" 
          alt="Personal Picture" 
          class="img-fluid"
          style="margin-right: 20px; max-width: 90%; border-radius: 20px; box-shadow: 8px 10px 50px rgba(0, 0, 0, 0.5);" 
          aria-label="A personal profile picture"
        >
      </div>
    </div>

    <div class="scroll-indicator" aria-label="Scroll Indicator">
      Scroll down for my Timeline<br> &blacktriangledown;
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <img 
          src="/images/TimeLine.png" 
          alt="Timeline representation" 
          class="img-fluid" 
          style="margin-right: 10px;" 
          aria-label="Timeline left side image"
        >
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <img 
          src="/images/Images.png" 
          alt="Additional images related to timeline" 
          class="img-fluid" 
          style="margin-left: 10px;" 
          aria-label="Timeline right side image"
        >
      </div>
    </div>
  </div>
</template>

<style scoped>


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
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  .personal-image{
    margin-left:1rem;
  }
}
</style>

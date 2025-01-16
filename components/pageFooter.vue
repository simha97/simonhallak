<template>
  <footer class="footer p-1 text-center">
    <div class="container p-4 pb-0">
      <section class="contact-info mb-4">
        <p aria-label="Phone number">Phone: +46760611353</p>
        <p aria-label="Email address">Email: simon.hallak.3@gmail.com</p>

        <a 
          class="btn btn-outline-light btn-floating m-1" 
          href="https://www.linkedin.com/in/simon-hallak-2738a318b/" 
          role="button" 
          target="_blank" 
          aria-label="Visit LinkedIn profile"
        >
          <img 
            src="/images/linkedin.png" 
            alt="LinkedIn" 
            style="width: 24px; height: 24px;"
          >
        </a>

        <a 
          class="btn btn-outline-light btn-floating m-1" 
          href="https://github.com/simha97" 
          role="button" 
          target="_blank" 
          aria-label="Visit GitHub profile"
        >
          <img 
            src="/images/github.png" 
            alt="GitHub" 
            style="width: 24px; height: 24px;"
          >
        </a>
      </section>
    </div>

    <div 
      class="footer-bottom text-center p-3 " 
      aria-label="Footer credits"
    >
      © 2025 Designed and Developed by me &lt;3
    </div>
  </footer>
</template>

<style scoped>

.footer {
  background-color: #FFEEDD;
}

.contact-info p {
  margin: 0;
  padding: 0.5rem 0;
  color: #000;
}

.footer-bottom {
  font-size: 0.9rem;
  background-color: #f6dfcf;
}

a {
  color: currentColor;
  margin-left: 10px; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

a:hover {
  color: #007bff; /* Change hover color to match theme */
}
</style>

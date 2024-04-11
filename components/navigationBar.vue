<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand">Simon Hallak</nuxt-link> <!-- Ensure this line is included -->
      <button class="navbar-toggler" type="button" @click="toggleNavbar" :aria-expanded="navbarOpen.toString()" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{'show': navbarOpen}" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" :class="{ 'active': isActive('/projects') }">Portfolio</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/aboutMe" class="nav-link" :class="{ 'active': isActive('/about-me') }">About Me</nuxt-link>
          </li>
          <li class="nav-item">
            <a href="https://drive.google.com/file/d/1gQnXTZfWma4aTusttx5wJ9B11ada5pIv/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="nav-link" :class="{ 'active': isActive('/resume') }">Resume</a>
          </li>

          <li class="nav-item">
            <a href="#" @click.prevent="scrollToContacts" class="nav-link">Contact Me</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    scrollToContacts() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    },
    isActive(route) {
      return this.$route.path === route;
    }
    
  }
}
</script>

<style>
.navbar {
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

.navbar-brand {
  font-weight: bold;
  color: #333;
}

.nav-link {
  color: #555;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover,
.nav-link:focus {
  color: #000;
  text-decoration: none !important;
  border-bottom: 2px solid #25384c !important;


}

.nav-link.active {
  font-weight: bold;
  color: #007bff;
  
}
</style>

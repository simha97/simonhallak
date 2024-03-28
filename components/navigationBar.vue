<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <nuxt-link to="/" class="navbar-brand">Simon Hallak</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link" :class="{ 'active': isActive('/projects') }">Projects</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/aboutMe" class="nav-link" :class="{ 'active': isActive('/about-me') }">About Me</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/resume" class="nav-link" :class="{ 'active': isActive('/resume') }">Resume</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contacts" class="nav-link" :class="{ 'active': isActive('/contacts') }">Contacts</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
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

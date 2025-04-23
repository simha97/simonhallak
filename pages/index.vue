<script setup>
import { ref, onMounted, computed } from 'vue'
import { fetchProjects } from '@/services/supabaseService'
import projectCard from '~/components/projectCard.vue';
import { websites } from '~/data/websites.js'; 

const projects = ref([{ id: 0, name: '', tags: '', date: '', area: '' }]);
const selectedArea = ref("all");

async function getProjects() { 
  try{
      projects.value = await fetchProjects()
  }
  catch (err){
    console.error('Error fetching projects:', err)
  }
}

function setSelectedArea(area) {
  selectedArea.value = area;
}

const filteredProjects = computed(() => {
  let projectsToFilter = projects.value;

  if (selectedArea.value !== "all") {
    projectsToFilter = projectsToFilter.filter(
      project => project.area === selectedArea.value
    );
  }

  return projectsToFilter.sort((a, b) => a.id - b.id);
});

onMounted(() => {
  getProjects()
})
</script>

<template>
  <div class="container mt-4">
    <section class="text-center p-4" role="banner" aria-labelledby="Introduction">
      <img class="profile-pic" :src="`/images/circleprofilepic.png`" alt="Profile Picture">
      <h1 class="intro pt-3"> <i>Hello!</i> <span class="i-am">I am </span><span class="name">Simon</span> </h1>
      <h3 class="fs-5 mb-4"> I am a Media Technology engineer specializing in full-stack development.<br> 
        My expertise lies in crafting robust and accessible websites
      </h3>
      <h3 class="fs-5 mb-4">I've spent my time at university learning about different areas of digital design:<br> 
      including front-end development, app UX/UI, game development, and VR design.<br>
      I have also gained valuable insights into entrepreneurship, leadership, and innovation.
      </h3>
    </section>

  <section class="mb-8">
    <h2 class="text-center mb-4">Websites by me</h2>
    <div class="websites-grid">
      <a v-for="(website, index) in websites" 
         :key="index" 
         :href="website.url" 
         target="_blank" 
         rel="noopener noreferrer"
         class="website-card">
        <div class="website-image">
          <img :src="`/websites/${website.name}.png`" :alt="website.name + ' website logo'" loading="lazy">
        </div>
        <div class="website-name">{{ website.name }}</div>
      </a>
    </div>
  </section>
        <h2 class="text-center mb-3">Selected projects</h2>
        <h3 class="text-center fs-5 mb-3">Click to read more about each project</h3>

    <div class="tabs mb-5">
      <button
          v-for="(area, index) in ['all', 'XR', 'Web Development', 'Product Design']"
          :key="area"
          :id="'b' + index" 
          @click="setSelectedArea(area)"
          :class="{ 'active': selectedArea === area}"
          :aria-pressed="selectedArea === area"
          >
            {{ area }}
      </button>
    </div>
    <div>
      <div v-for="project in filteredProjects" :key="project.id" class="projects">
        <NuxtLink :to="`/projects/${project.id}`" class="card-link">
          <projectCard :imageName="project.name || 'default'"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.profile-pic{
  width: 15%;
}

.card-link{
  display: flex;
  margin: auto;
  max-width: 50rem;
}

.intro{
  font-size: clamp(2.5rem, 5vw, 5.5rem);
  color: black
}

.name {
  background: linear-gradient(to bottom left, #FF8660, #9A33FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Updated Websites section styles */
.websites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 0 1rem;
}

.website-card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  background: white;
}

.website-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.website-image {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.website-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.website-card:hover .website-image img {
  transform: scale(1.03);
}

.website-name {
  padding: 0.75rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;
  border-top: 1px solid #f0f0f0;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .websites-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.25rem;
  }
  
  .website-image {
    height: 140px;
  }
}

@media (max-width: 768px) {
  .websites-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 600px;
  }
  
  .website-image {
    height: 130px;
  }
}

@media (max-width: 480px) {
  .profile-pic{
  width:40%
}

  .websites-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    padding: 0 0.5rem;
  }
  
  .website-image {
    height: 110px;
  }
  
  .website-name {
    padding: 0.5rem;
    font-size: 0.85rem;
  }
}

/* Tabs styles */
.tabs {
  display: flex;
  justify-content: center;
  gap: 10px; 
}

.tabs button {
  padding: 10px 20px;
  border: 1px solid #a7a7a7; 
  border-radius: 20px; 
  background-color: #fafafa;
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.tabs button:hover, .tabs button.active {
    background-color: #b47f60; 
    color: #fff; 
    border: none;
    text-shadow: 1px 1px 5px  #333;
}

#b1:hover, #b1.active{
  background-color: #75b1e8; 
}

#b2:hover, #b2.active{
  background-color: #fce292; 
}

#b3:hover, #b3.active{
  background-color: #89dec5; 
}

@media (max-width: 768px) {
  .websites-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .website-image {
    height: 180px;
  }

  .tabs button {
    padding: 8px 16px; 
    font-size: 0.9rem; 
    border-radius: 15px;
  }

  .tabs {
    gap: 5px;
  }
}

@media (max-width: 480px) {
  .websites-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tabs button {
    padding: 6px 12px; 
    font-size: 0.8rem; 
  }
}
</style>
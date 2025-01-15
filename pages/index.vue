<script setup>
import { ref, onMounted } from 'vue'
import { fetchProjects } from '@/services/supabaseService'
import projectCard from '~/components/projectCard.vue';

const projects = ref([{ id: 0, name: '', tags: '', date: '', area: '' }]); // ref creates reactive reference , when the value changes vue updates this. empty array is the initial state
const selectedArea = ref("all") //  all is the initial state

async function getProjects() { 
  try{
      projects.value = await fetchProjects() //fetchProjects function is in supabaseService
  }
  catch (err){
    console.error('Error fetching projects:', err)
  }
}

function setSelectedArea(area) { //function that changes the selectedArea. used when clicking on the button onClick
  selectedArea.value = area;
}

const filteredProjects = computed(() => {
  let projectsToFilter = projects.value;

  // Filter projects based on the selected area
  if (selectedArea.value !== "all") {
    projectsToFilter = projectsToFilter.filter(
      project => project.area === selectedArea.value
    );
  }

 
  return projectsToFilter.sort((a, b) => a.id - b.id);  // Sort projects by id
});

onMounted(() => {
  getProjects()
})
</script>

<template>
  <div class="container mt-4">
    <section class="text-center p-4" role="banner" aria-labelledby="Introduction">
    <h1 class="intro pt-5"> <i>Hello!</i> <span class="i-am">I am </span><span class="name">Simon</span> </h1>
    <h3 class="fs-2 mb-5"> I develope, design, create and edit</h3>
    <h2 class="mb-4">Welcome to my portfolio!</h2>
    <p class="m-auto pb-5 text-secondary fs-4">Enjoy my list of projects that I have completed and feel proud of</p>
    </section>

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
.card-link{
  display: flex;
  margin: auto;
  max-width: 50rem;
}

.intro{
  font-size: clamp(2.5rem, 5vw, 5.5rem);
}
.i-am {
  color: #9b4819; 
}

.name{
  background: #ffe69b;
  transition: background 0.3s ease;
}

.name:hover{
    background:none;
    color: #ffffff;
    text-shadow: 1px 1px 5px  #333;
}


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
    .tabs button {
        padding: 6px 12px; 
        font-size: 0.8rem; 
    }
}

</style>


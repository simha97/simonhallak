<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://zczbffrkrnrupttvvbvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjemJmZnJrcm5ydXB0dHZ2YnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzc2MDUsImV4cCI6MjAyNTc1MzYwNX0.t4HDl0WdDRz2Vsg96yRsJn0x8OnzfHusEodWXUIoG78')
const projects = ref([])
const selectedArea = ref("all") // Add this line

async function getProjects() {
  const { data } = await supabase.from('projects').select()
  projects.value = data
}

onMounted(() => {
  getProjects()
})

function setSelectedArea(area) {
  selectedArea.value = area;
}

// Computed property to filter projects based on the selected area
const filteredProjects = computed(() => {
  if (selectedArea.value === "all") {
    return projects.value;
  }
  return projects.value.filter(project => project.area === selectedArea.value);
});

</script>

<template>
  <div class="container mt-3">
    
    <div class="welcome-container">
    <h1 class="welcome-heading">Welcome to my portfolio!</h1>
    <p class="welcome-subtext">Enjoy my list of projects that I have completed and feel proud of</p>
    </div>


    <div class="tabs">
      <button @click="setSelectedArea('all')" :class="{ 'active': selectedArea === 'all' }">All</button>
      <button @click="setSelectedArea('XR')" :class="{ 'active': selectedArea === 'XR' }">XR</button>
      <button @click="setSelectedArea('Web design')" :class="{ 'active': selectedArea === 'Web design' }">Web design</button>
      <button @click="setSelectedArea('Entrepreneurship')" :class="{ 'active': selectedArea === 'Entrepreneurship' }">Entrepreneurship</button>
    </div>
    <div class="row justify-content-center">
      <!-- Use filteredProjects for v-for instead of projects -->
      <div v-for="project in filteredProjects" :key="project.id" class="projects col-md-4 d-flex align-items-stretch my-3">
        <NuxtLink :to="`/projects/${project.id}`">
          <card :title="project.name" :tags="project.tags" :date="project.date" :imageName="project.name" class="w-100"/>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

.welcome-container {
  text-align: center;
  padding: 40px 20px;
}

.welcome-heading {
  font-size: 2.5rem; /* 40px if the base font size is 16px */
  margin-bottom: 20px; /* Adds some space between the heading and subtext */
  font-weight: 600; /* Semi-bold for emphasis */
  line-height: 1.2; /* Improves readability for larger text */
}

.welcome-subtext {
  font-size: 1.5rem; /* 24px if the base font size is 16px */
  color: #606060; /* A softer color for the subtext */
  margin: 0 auto; /* Centers the text */
  max-width: 600px; /* Ensures the text doesn't stretch too wide on larger screens */
}

.projects a {
    text-decoration: none !important; /* Remove underline from anchor tags */
}
.tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Adds some space between buttons */
    margin-bottom: 20px;
}
.tabs button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px; /* Rounded corners */
    background-color: #f0f0f0;
    color: #333;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.tabs button:hover, .tabs button.active {
    background-color: #25384c; /* Darker shade on hover and for active button */
    color: #fff; /* White text on active/hover state */
}

/* Styling for indicating the active tab */
.tabs button.active {
    font-weight: bold;
}
</style>


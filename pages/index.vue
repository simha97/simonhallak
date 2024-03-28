<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://zczbffrkrnrupttvvbvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjemJmZnJrcm5ydXB0dHZ2YnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzc2MDUsImV4cCI6MjAyNTc1MzYwNX0.t4HDl0WdDRz2Vsg96yRsJn0x8OnzfHusEodWXUIoG78')
const projects = ref([])

async function getProjects() {
  const { data } = await supabase.from('projects').select()
  projects.value = data
}

onMounted(() => {
  getProjects()
})
</script>

<template>
  <div class="container mt-3">
  <div class="row justify-content-center">
    
    <div v-for="project in projects" :key="project.id" class="projects col-md-4 d-flex align-items-stretch my-3">
      <NuxtLink :to="`/projects/${project.id}`">

      <card :title="project.name" :tags="project.tags" :date="project.date" :imageName="project.name" class="w-100"/>
    </NuxtLink>
    </div>
  </div>
</div>


</template>


<style scoped>
.projects a{
    text-decoration: none !important; /* Remove underline from anchor tags */

}

</style>
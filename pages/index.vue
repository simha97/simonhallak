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
  <ul>
    <li v-for="project in projects" :key="project.id">
      <NuxtLink :to="`/projects/${project.id}`">{{ project.name }}</NuxtLink>
    </li>  </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'

const router = useRouter()
const project = ref(null)

const supabase = createClient('https://zczbffrkrnrupttvvbvo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjemJmZnJrcm5ydXB0dHZ2YnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNzc2MDUsImV4cCI6MjAyNTc1MzYwNX0.t4HDl0WdDRz2Vsg96yRsJn0x8OnzfHusEodWXUIoG78')

async function fetchProject() {
  const projectId = router.currentRoute.value.params.id
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', projectId)
    .single()

  if (data) {
    project.value = data
  } else {
    console.error(error)
  }
}


onMounted(fetchProject)
</script>

<template>
  <div v-if="project" class="mx-5 mt-5">

    <h1 class= "">{{ project.name }}</h1>
    <p class= "">{{ project.tags }}</p>
    <p>{{ project.date }}</p>
    <div class="row">
    <div class="col-md-6">
      <p>{{ project.description }}</p>
      <div class="my-3">
      </div>
    </div>
    <div class="col-md-6">

      <div class="my-3">
      </div>
    </div>
  </div>

  </div>
  <div v-else>
    <p>Loading project...</p>
  </div>
</template>

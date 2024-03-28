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
    
    <h1 class= "">{{ project.name }} </h1>
    <p class= "">{{ project.tags }}</p>
    <p>Date of the project: {{ project.date }}</p>
    <div class="row">
    <div class="col-md-6">
      <h4>Description:</h4>
      <p>{{ project.description }}</p>
      <h4>My contribution:</h4>
      <p>{{ project.contribution }}</p>

      <h4>what i learned</h4>
      <p>{{ project.learning }}</p>

      <div v-if="project.githubLink">
        <a :href="project.githubLink">Here is the link to the github repository</a>
      </div>
      <div v-if="project.websiteLink">
        <a :href="project.websiteLink">Here is a link to the project website</a>
      </div>
      <div v-if="project.prototypeLink">
        <a :href="project.prototypeLink">Here is a link to the prototype</a>
      </div>
        <div v-if="project.pdfLink">
        <a :href="project.pdfLink">Here is a link to the PDF</a>
      </div>

    </div>
    <div class="col-md-6">

      <div class="my-3">
        <div v-if="project.videoid1">
          <vue-plyr>
            <div class="plyr__video-embed">
              <iframe
                :src="`https://www.youtube.com/embed/${project.videoid1}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                allowfullscreen
                allowtransparency
                allow="autoplay"
              ></iframe>
            </div>
          </vue-plyr> 
          </div>
          <div v-else class="image-embed">
              <img :src="`/images/${project.name}1.png`">
          </div>
          <div v-if="project.videoid2">
            <vue-plyr>
              <div class="plyr__video-embed my-5">
                <iframe
                  :src="`https://www.youtube.com/embed/${project.videoid2}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                  allowfullscreen
                  allowtransparency
                  allow="autoplay"
                ></iframe>
              </div>
            </vue-plyr> 
          </div>
          <div v-else class="image-embed my-5">
              <img :src="`/images/${project.name}2.png`">
          </div>
        </div>
    </div>
  </div>

  </div>
  <div v-else>
    <p>Loading project...</p>
  </div>
</template>


<style scoped>
/* Add some styles to ensure the video stays within its column */
.plyr__video-embed {
  max-width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}

.plyr__video-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-embed {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.image-embed img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover ensures the image covers the padding area; adjust as necessary */
}

</style>

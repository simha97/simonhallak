<script setup>
import { ref, onMounted } from 'vue'
import { fetchProject } from '@/services/supabaseService'
import { useRoute } from 'vue-router';

const project = ref(null)
const route = useRoute();
const projectId = route.params.id;

async function getProject() { 
  try{
      project.value = await fetchProject(projectId) //fetchProjects function is in supabaseService
      console.log("here is",project.value)
  }
  catch (err){
    console.error('Error fetching projects:', err)
  }
}

onMounted(() => {
  getProject()
})

</script>

<template>
  <div v-if="project" class="page-body">
  <h1 aria-label="Project name">{{ project.name }}</h1>
  <p aria-label="Project tags">{{ project.tags }}</p>

  <div class="links">
    <a v-if="project.githubLink" :href="project.githubLink" role="button" target="_blank" area-label="View project on GitHub">
      <img src="/images/github.png" alt="GitHub" style="width: 24px; height: 24px;">
    </a>

    <a v-if="project.websiteLink" :href="project.websiteLink" role="button" target="_blank" area-label="Visit project website">
        <img src="/images/websiteIcon.png" alt="Website" style="width: 24px; height: 24px;">
    </a>

    <a v-if="project.prototypeLink" :href="project.prototypeLink" role="button" target="_blank" aria-label="View project prototype">
        <img src="/images/websiteIcon.png" alt="Prototype" style="width: 24px; height: 24px;">
    </a>

    <a v-if="project.pdfLink" :href="project.pdfLink" role="button" target="_blank" aria-label="Download project PDF">
        <img src="/images/websiteIcon.png" alt="PDF" style="width: 24px; height: 24px;">
    </a>

  </div>
   
  <p aria-label="Project date">Date of the project: {{ project.date }}</p>

  <h4 aria-label="Project description">Description:</h4>
  <p>{{ project.description }}</p>

  <vue-plyr v-if="project.videoid1">
      <iframe
        :src="`https://www.youtube.com/embed/${project.videoid1}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        class="my-4"
        aria-label="Project video 1"

      ></iframe>
  </vue-plyr>
  <img v-else :src="`/images/${project.name}1.png`"  class="my-4" :alt="`${project.name} screenshot 1`"
/>

  <h4 aria-label="Contribution to project">My contribution:</h4>
  <p>{{ project.contribution }}</p>

  <h4 aria-label="Lessons learned">What I learned:</h4>
  <p>{{ project.learning }}</p>

  <vue-plyr v-if="project.videoid2">
      <iframe
        :src="`https://www.youtube.com/embed/${project.videoid2}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
        allowfullscreen
        allowtransparency
        allow="autoplay"
        class="my-4"
        aria-label="Project video 2"
      ></iframe>
  </vue-plyr>
  <img v-else :src="`/images/${project.name}2.png`"  class="my-4" :alt="`${project.name} screenshot 2`"
  />

 
</div>

<p v-else>Loading project...</p>
</template>


<style scoped>
.page-body{
  margin: 8rem 20rem 3rem 20rem;

}

.links{
  display:flex;
  justify-content: flex-end;
  gap: 3rem;
  
}


iframe {
  display: block;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  aspect-ratio: 16/9;
  border: 0; 
}

img {
  display: block;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto; 
  height: auto;
}

@media (max-width: 1042px) {
  .page-body{
    margin: 3rem;
  }

  .links{
  display:flex;
  justify-content: flex-start;
  margin: 2rem;
  gap: 3rem;
  
}
}

</style>

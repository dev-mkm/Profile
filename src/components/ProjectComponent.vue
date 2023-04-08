<script setup>
import ImageComponent from './ImageComponent.vue';
defineProps({
  img: {
    type: String,
    required: false
  },
  header: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  linktext: {
    type: String,
    required: false
  }
})
</script>

<template>
    <div class="project">
        <ImageComponent class="Image" :img="img"/>
        <h2>{{ header }}</h2>
        <p>{{ text }}</p>
        <a :href="link" target="_blank" rel="noopener">{{ linktext ? linktext : 'Visit' }}</a>
    </div>
</template>

<style scoped>
.project {
  padding: 1rem;
  margin: 0 1rem !important;
  min-height: 11rem;
  border-radius: 1rem;
  display: inline-block;
  background: linear-gradient(0, rgba(200, 200, 200, 0.1) 0%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.15) 100%);
  width: 16rem;
}
.Image {
  width: 95%;
  margin: 0 2.5%;
}
h2 {
  color: var(--color-heading);
  display: block;
  font-size: 2rem;
  padding: 0.2rem 1rem;
}
p {
  padding: 0 1.2rem;
  display: block;
  color: var(--color-text);
  font-size: 1.2rem;
}
a {
  margin: 0.5rem;
  padding: 1rem 2rem;
  border: 1px solid var(--color-heading);
  border-radius: 1rem;
  text-align: center;
  display: block;
  color: var(--color-heading);
}
a:hover {
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}
@media (max-width: 1000px) {
  div {
    padding: 1.5rem !important;
    margin: 0 !important;
  }
  h2 {
    font-size: 2rem !important;
  }
  p {
    font-size: 1rem !important;
  }
}
</style>
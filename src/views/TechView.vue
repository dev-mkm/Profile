<script setup>
import ImageComponent from '../components/ImageComponent.vue';
</script>

<template>
<h2>Technologies</h2>
<div class="flex">
  <ImageComponent class="fleximg" img="../Images/laravel.jpg" hover="Laravel" link="https://laravel.com/"/>
  <ImageComponent class="fleximg" img="../Images/django.png" hover="Django" link="https://www.djangoproject.com/"/>
  <ImageComponent class="fleximg" img="../Images/nodejs.png" hover="NodeJS" link="https://nodejs.org/en/" bg-color1="#fff"/>
  <ImageComponent class="fleximg" img="../Images/wordpress.png" hover="WordPress" link="https://wordpress.org/" bg-color1="#222222"/>
  <ImageComponent class="fleximg" img="../Images/vue.jpeg" hover="Vue" link="https://vuejs.org/"/>
  <ImageComponent class="fleximg" img="../Images/git.png" hover="GitHub" link="https://github.com/"/>
  <ImageComponent class="fleximg" img="../Images/mysql.webp" hover="MySQL" link="https://www.mysql.com/"/>
  <ImageComponent class="fleximg" img="../Images/docker.png" hover="Docker" link="https://www.docker.com"/>
  <ImageComponent class="fleximg" img="../Images/sqlite.png" hover="SQLite" link="https://www.sqlite.org/index.html" bg-color1="#fff"/>
</div>
</template>

<style scoped>
h2 {
  color: var(--color-heading);
  font-size: 3rem;
  margin: 1.5rem 2rem;
}
.flex {
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em auto;
  overflow-y: auto;
  max-height: 75%;
}
@media (max-width: 1000px) {
  h2 {
    font-size: 6vw !important;
  }
  .flex .fleximg {
    width: 15vw;
  }
}
</style>
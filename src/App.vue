<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="Container"><RouterView/></div>
    <nav>
      <div class="list">
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/skills">Skills</RouterLink>
        <RouterLink to="/tech">Technologies</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </div>
      <div class="line">
        <ul>
          <a href="mailto:m.khoshdel81@gmail.com" target="_blank" rel="noopener" class="fa fa-envelope" style="padding-top: 9px;"></a>
          <a href="https://www.linkedin.com/in/mkm-dev/" target="_blank" rel="noopener" class="fa fa-linkedin" style="padding-top: 9px;"></a>
          <a href="https://github.com/dev-mkm" target="_blank" rel="noopener" class="fa fa-github" style="font-size: 29px;padding: 5px 0;"></a>
          <a href="https://t.me/mkm_dev" target="_blank" rel="noopener" class="fa fa-telegram" style="font-size: 25px;padding: 8px 0;"></a>
        </ul>
      </div>
    </nav>
  </main>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');

.Container, .list {
  font-family: 'Kanit', 'Courier New', Courier, monospace;
}

main {
  line-height: 1.5;
  width: 1280px;
  overflow: hidden;
  background: linear-gradient(0, rgba(34, 34, 34, 0.7) 0%, rgba(34, 34, 34, 0.5) 70%, rgba(34, 34, 34, 0.3) 100%);
  border-radius: 2em;
}
.line {
  border-top: 2px solid var(--color-border);
  width: 99%;
  margin: 0 auto;
  margin-top: auto;
  display: flex;
  place-items: center;
  position: absolute;
  bottom: 0;
}
.list {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  overflow: hidden;
}
.list a {
  display: block;
  text-align: center;
  font-size: 1.7em;
  padding: 0.5em;
  color: var(--color-header);
}
ul {
  padding: 5px;
  margin: 0 auto;
  display: block;
  margin-top: auto;
}
ul a {
  color: var(--color-text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 22px;
  padding: 11px 0;
  overflow: hidden;
  float: right;
}
nav {
  width: 25%;
  height: 100%;
  float: right;
  background: rgba(34, 34, 34, 0.3);
  position: relative;
}
.Container {
  width: 75%;
  display: inline-block;
  padding: 1rem;
  height: 600px;
  overflow: hidden;
}
@media (max-width: 1280px) {
  main {
    width: 100%;
  }
  nav, .Container {
    height: auto;
    width: 100%;
  }
}
@media (max-width: 1000px) {
  .list a {
    font-size: 4vw;
  }
}
</style>

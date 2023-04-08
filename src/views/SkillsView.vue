<script setup>
import SkillComponent from '../components/SkillComponent.vue';
</script>

<template>
  <div class="div">
    <h2 class="head">Skills</h2>
    <SkillComponent skill="PHP" experience="3.7" base="5" red="15" green="171" blue="255"/>
    <SkillComponent skill="Python" experience="2" base="5" red="15" green="171" blue="255"/>
    <SkillComponent skill="C#" experience="1.5" base="5" red="15" green="171" blue="255"/>
    <SkillComponent skill="Javascript" experience="0.7" base="5" red="15" green="171" blue="255"/>
    <SkillComponent skill="Kotlin" experience="0.3" base="5" red="15" green="171" blue="255"/>
  </div>
  <div class="div" style="float: right;">
    <h2 class="head">Frameworks</h2>
    <SkillComponent skill="Rest API" experience="2.5" base="4" red="15" green="255" blue="86"/>
    <SkillComponent skill="Laravel" experience="1.2" base="4" red="15" green="255" blue="86"/>
    <SkillComponent skill="Django" experience="0.7" base="4" red="15" green="255" blue="86"/>
    <SkillComponent skill="Vue" experience="0.4" base="4" red="15" green="255" blue="86"/>
    <SkillComponent skill="NodeJS" experience="0.2" base="4" red="15" green="255" blue="86"/>
  </div>
</template>

<style scoped>
.div {
  width: 50%;
  display: inline-block;
}
.head {
  color: var(--color-heading);
  font-size: 3rem;
  margin: 0 2rem;
}
@media (max-width: 1000px) {
  .head {
    margin: 0 1rem;
    font-size: 6vw !important;
  }
  .div {
    width: 100%;
  }
}
</style>
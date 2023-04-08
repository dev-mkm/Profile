<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import SkillComponent from '../components/SkillComponent.vue';
</script>

<template>
  <div class="div">
    <h2 class="head">Social Media</h2>
    <ButtonComponent icon="telegram" text="Telegram" link="https://t.me/mkm_dev" color="#2AABEE"/>
    <ButtonComponent icon="github" text="GitHub" link="https://github.com/dev-mkm" color="#171515"/>
    <ButtonComponent icon="linkedin" text="LinkedIn" link="https://www.linkedin.com/in/mohammad-khoshdel-06448b210" color="#0072b1"/>
    <ButtonComponent icon="google" text="Gmail" link="mailto:m.khoshdel81@gmail.com" color="#c71610"/>
  </div>
  <div class="div" style="float: right;">
    <h2 class="head">Soft Skills</h2>
    <SkillComponent skill="Creativity" experience="6" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Flexibility" experience="5" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Competitiveness" experience="5" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Energetic" experience="4" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Problem-solving Skill" experience="4" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Perseverance" experience="3" base="7" red="255" green="255" blue="255" hide-text="true"/>
    <SkillComponent skill="Time Management" experience="3" base="7" red="255" green="255" blue="255" hide-text="true"/>
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
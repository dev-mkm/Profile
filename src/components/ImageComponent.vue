<script setup>
defineProps({
  img: {
    type: String,
    required: true
  },
  round: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  bgColor1: {
    type: String,
    required: false
  },
  bgColor2: {
    type: String,
    required: false
  },
  hover: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="imgContainer" :style="[round ? {'border-radius': '50%'} : {'border-radius': '1.5rem'}, bgColor1 ? bgColor2 ? {'background': 'linear-gradient(45deg, '+bgColor1+', '+bgColor2+''} : {'background' : bgColor1} : {'background' : 'rgb(80, 80, 80)'}]">
    <a class="img" v-if="link" :href="link" target="_blank" rel="noopener" :style= "[{'background-image': 'url(' + img + ')'}]"><div v-if="hover">{{ hover }}</div></a>
    <div class="img" v-else :style= "[{'background-image': 'url(' + img + ')'}]"><div v-if="hover">{{ hover }}</div></div>
  </div>
</template>

<style scoped>
.imgContainer {
  width: 8rem;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  padding: 0 !important;
  margin: 1rem;
}
.img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items:flex-end;
  justify-content:center;
  width: 100%;
  height: 100%;
  padding-top: 100%;
}
.img:hover {
  background-color:transparent;
}
.img div {
  height: 0%;
  width: 100%;
  display: block;
  background: var(--color-background-mute);
  text-align: left;
  padding: 0 1rem;
  font-size: 1.2rem;
  line-height: 2.3rem;
  color: var(--color-heading);
  transition-duration: 0.3s;
  position: absolute;
  overflow: hidden;
}
@media (max-width: 1000px) {
  .img div {
    font-size: 2.7vw;
    line-height: 5vw;
  }
}
.img:hover div {
  height: 40%;
}
</style>
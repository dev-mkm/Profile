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
  mainheader: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
    <div v-bind:style= "[mainheader ? {'padding': '3rem 2rem'} : {'margin-left': '3rem'}]">
        <ImageComponent :img="img" round="true" v-if="img" style="float: left;"/>
        <h2 v-bind:style= "[mainheader ? {'font-size': '4rem'} : {}]">{{ header }}</h2>
        <p v-bind:style= "[mainheader ? {'font-size': '2rem'} : {}]">{{ text }}</p>
    </div>
</template>

<style scoped>
div {
    padding: 1.5rem 2rem;
    margin: 0 2rem;
}
h2 {
  color: var(--color-heading);
  font-size: 2.5rem;
}
p {
  padding: 8px;
  color: var(--color-text);
  font-size: 1.5rem;
}
@media (max-width: 1000px) {
  div {
    padding: 1.5rem !important;
    margin: 0 !important;
  }
  h2 {
    font-size: 6vw !important;
  }
  p {
    font-size: 4vw !important;
  }
}
</style>
<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
})
</script>

<script>
export default {
  data() {
    return {
      style: {
        '--colorbtn': this.color,
      },
    };
  }
}
</script>

<template>
  <a :href="link" target="_blank" rel="noopener" :style="style">
    <div :class="'fa fa-'+icon"></div>
    {{ text }}
  </a>
</template>

<style scoped>
a {
  border-radius: 1rem;
  display: block;
  margin: 1rem 2rem;
  padding: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  background: var(--colorbtn);
  font-size: 2.2rem;
  line-height: 3rem;
  height: 4rem;
}
a div {
  width: 3rem;
  height: 3rem;
  margin: 0 2rem;
  font-size: 3rem;
  float: left;
}
a:hover {
  text-shadow: none;
  background: var(--colorbtn);
  box-shadow: 0 0 1rem var(--colorbtn);
}
</style>
<script setup>
defineProps({
  skill: {
    type: String,
    required: true
  },
  experience: {
    type: Int16Array,
    required: true
  },
  base: {
    type: Int16Array,
    required: true
  },
  red: {
    type: Int16Array,
    required: true
  },
  green: {
    type: Int16Array,
    required: true
  },
  blue: {
    type: Int16Array,
    required: true
  },
  hideText: {
    type: Boolean,
    required: false
  }
});
</script>

<script>
export default {
  data() {
    return {
      years: '0 Years',
      pre: 0
    }
  },
  mounted() {
    if(!this.hideText){
      if(this.experience > 1) {
        if ((this.experience * 10)% 10 == 0) {
          this.years = this.experience + ' years'
        } else {
          this.pre = ((this.experience * 10) - (this.experience * 10) % 10) / 10;
          this.years = this.pre + '~' + (this.pre + 1) + ' years'
        }
      } else if (this.experience == 1) {
        this.years = '1 year'
      } else if (this.experience >= 0.5) {
        this.years = '~1 year'
      } else {
        this.years = 'less than a year';
      }
    } else {
      this.years = ''
    }
  }
}
</script>

<template>
    <div class="card">
        <h2 :style= "[hideText ? {'padding-bottom': '5px'} : {}]">{{ skill }}</h2>
        <div class="progressbar">
            <div class="progress" :style= "[{'width': (experience * 75/base) + 25 + '%',
            'background-color': 'rgba('+red+', '+green+', '+blue+', 0.7)',
            'box-shadow': '0px 0px 10px rgba('+red+', '+green+', '+blue+', 0.7)'},hideText ? {'height': '0.2rem'} : {}]"><p v-if="experience >= 0.5 && !hideText">{{ years }}</p></div>
            <p class="progressText" v-if="experience < 0.5 && !hideText">{{ years }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
  margin: 10px 2rem;
  display: block;
  width: 85%;
}
h2 {
  color: var(--color-heading);
  font-size: 1.5rem;
  padding: 10px;
}
.progress, .progressbar {
  border-radius: 10vw;
}
.progress {
  background-color: rgba(0, 170, 255, 0.7);
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 170, 255, 0.7);
  overflow: hidden;
  max-width: 100%;
  animation: 0.5s ease-out 0s 1 progress;
  height: 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
}
.progressbar {
  background-color: rgba(34, 34, 34, 0.5);
}
.progressText {
  font-size: 1rem;
  line-height: 1.5rem;
  height: 1.5rem;
  color: white;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0 0.5rem;
  animation: 2s ease-out 0s 1 progress;
  overflow: hidden;
}
@media (max-width: 1000px) {
  h2, .progress, .progressText {
    font-size: 4vw;
  }
  .progress, .progressText {
    line-height: 6vw;
    height: 6vw;
  }
  .card {
    margin: 10px 1rem;
  }
}
@keyframes progress {
  0% {
    width: 0;
  }
}
</style>
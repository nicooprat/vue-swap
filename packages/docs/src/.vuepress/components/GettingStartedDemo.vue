<template>
  <section>
    <button @click="step--">👈</button>
    <Swap :direction="direction">
      <article :key="step" v-text="step" :style="`background-color: ${getColor}; height: ${2 + Math.random() * 10}em;`" />
    </Swap>
    <button @click="step++">👉</button>
  </section>
</template>

<script>
import Swap from '../../../../../packages/vue-swap/src/Swap'

// https://tailwindcss.com/docs/customizing-colors/#default-color-palette
const colors = ['#ECC94B', '#48BB78', '#38B2AC', '#4299E1', '#667EEA', '#9F7AEA', '#ED64A6']

export default {
  components: {
    Swap,
  },
  data() {
    return {
      step: 1,
      direction: 'right',
    }
  },
  watch: {
    step(newStep, oldStep) {
      this.direction = newStep > oldStep ? 'left' : 'right'
    }
  },
  computed: {
    getColor() {
      return colors[Math.abs(this.step % colors.length)]
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
  margin-bottom: 5vh;
  font-size: calc(1.5rem + 1.5vw);
  height: 12em;
  border-radius: 0.15em;
  overflow: hidden;
  background-color: #F7FAFC;
}

article {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: monospace;
  font-size: 1em;
  font-weight: bold;
  color: white;
  border-radius: 0.15em;
  margin: 1rem;
}

button {
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 5%;
  position: absolute;
  top: 0;
  font-size: 1.5em;
  z-index: 1;
  padding: 0.25em;
  line-height: 1;
  border-radius: 999px;
  text-indent: .15em;
}

button:hover,
button:focus,
button:active {
  outline: none;
  cursor: pointer;
  background-color: #202329;
}

button:active {
  transform: translateY(2px);
}

button:first-child {
  left: 0;
}

button:last-child {
  right: 0;
}
</style>

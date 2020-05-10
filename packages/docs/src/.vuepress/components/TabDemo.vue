<template>
  <section>
    <nav>
      <button v-for="i in 3" @click="tab = i" :class="{ active: i === tab }" v-text="i" />
    </nav>
    <main>
      <Swap :direction="direction">
        <article :key="tab" v-text="tab" :style="`background-color: ${getColor};`" />
      </Swap>
    </main>
  </section>
</template>

<script>
import Swap from '../../../../../packages/vue-swap/src/Swap'

// https://tailwindcss.com/docs/customizing-colors/#default-color-palette
const colors = ['#48BB78', '#4299E1', '#9F7AEA']

export default {
  components: {
    Swap,
  },
  data() {
    return {
      tab: 1,
      direction: 'right',
    }
  },
  watch: {
    tab(newTab, oldTab) {
      this.direction = newTab > oldTab ? 'left' : 'right'
    }
  },
  computed: {
    getColor() {
      return colors[this.tab - 1]
    }
  }
}
</script>

<style scoped>
section {
  margin-bottom: 5vh;
  font-size: calc(1.5rem + 1.5vw);
}

main {
  overflow: hidden;
  border-radius: 0.15em;
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
  padding: 5%;
}

nav {
  display: flex;
  justify-content: center;
}

button {
  appearance: none;
  border: none;
  background: none;
  padding: 0;
  margin: 1em .5em;
  width: 3em;
  height: 1.8em;
  font-size: .5em;
  line-height: 1;
  border-radius: .3em;
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #20232911;
}

button:hover,
button:focus,
button:active {
  outline: none;
  cursor: pointer;
  background-color: #20232933;
}

button.active {
  background-color: #202329;
  color: white;
}

/deep/ .swap-left-leave-to {
  animation: leaveToLeft 1s;
  z-index: 0;
}

/deep/ .swap-left-enter-to {
  animation: enterFromRight 1s;
  z-index: 1;
}

/deep/ .swap-right-leave-to {
  animation: leaveToRight 1s;
  z-index: 1;
}

/deep/ .swap-right-enter-to {
  animation: enterFromLeft 1s;
  z-index: 0;
}

@keyframes leaveToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-25%);
    filter: brightness(0.5);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leaveToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes enterFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>

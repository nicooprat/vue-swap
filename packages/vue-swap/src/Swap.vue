<template>
  <div data-swap>
    <component :is="supportsCssGrid ? 'transition' : 'div'" :name="`swap-${direction}`">
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'left',
      validator: (dir) => ['left', 'right'].includes(dir),
    },
  },
  computed: {
    supportsCssGrid() {
      return window.CSS && window.CSS.supports('display: grid');
    },
  },
};
</script>

<style scoped>
@supports (display: grid) {
  [data-swap] {
    display: grid;
    grid-template-areas: 'content';
  }

  [data-swap] > * {
    grid-area: content;
  }

  .swap-right-enter-active {
    animation: swap-right-in 500ms;
  }

  .swap-right-leave-active {
    animation: swap-right-out 500ms;
  }

  @keyframes swap-right-in {
    0% {
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes swap-right-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
  }

  .swap-left-enter-active {
    animation: swap-left-in 500ms;
  }

  .swap-left-leave-active {
    animation: swap-left-out 500ms;
  }

  @keyframes swap-left-in {
    0% {
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes swap-left-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
  }
}
</style>

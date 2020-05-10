<script>
export default {
  functional: true,
  props: {
    direction: {
      type: String,
      default: 'left',
      validator: (dir) => ['left', 'right'].includes(dir),
    },
  },
  render (h, ctx) {
    const wrap = window && window.CSS && window.CSS.supports('display: grid') ? 'transition' : 'div'
    return h('div', { attrs: { 'data-swap': true } }, [
      h(wrap, { props: { name: `swap-${ctx.props.direction}`} }, ctx.slots().default)
    ])
  }
}
</script>

<style>
@supports (display: grid) {
  [data-swap] {
    display: grid;
    grid-template-areas: 'content';
  }

  [data-swap] > * {
    grid-area: content;
  }

  [data-swap] > .swap-right-enter-active {
    animation: swap-right-in 500ms;
  }

  [data-swap] > .swap-right-leave-active {
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

  [data-swap] > .swap-left-enter-active {
    animation: swap-left-in 500ms;
  }

  [data-swap] > .swap-left-leave-active {
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

---
home: true
heroImage: /vue-swap.svg
heroText: vue-swap
tagline: Vue functional component to horizontally swap between items
actionText: Get Started →
actionLink: /guide/
features:
- title: Performant
  details: Uses only CSS grids to stack items & CSS animation to translate them
- title: Progressive
  details: If the browser doesn't support CSS grids, it just toggle elements instead
- title: Unobtrusive
  details: It won't break your design, make it your own easily, as long as the key changes
footer: MIT Licensed | Copyright © 2020-present Nico Prat
---

Use it for simple horizontal slideshow, like a tab system, onboarding process or form wizard.

## Demo

Set a `key` to your components to trigger the animation, and wrap them with `Swap`. Its height will adapt to the tallest element displayed (without animation because it would be very bad for performances).

```vue
<template>
  <Swap :direction="direction">
    <div :key="i" />
  </Swap>
</template>

<script>
import { Swap } from 'vue-swap'

export default {
  components: {
    Swap,
  },
}
</script>
```

<GettingStartedDemo />

## Tabs demo

Swap left or right according to any value. You can also easily customize transitions with just a few lines of CSS.

```vue
<template>
  <Swap :direction="direction">
    <div :key="tab" />
  </Swap>
</template>

<script>
import { Swap } from 'vue-swap'

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
}
</script>

<style scoped>
/deep/ .swap-left-leave-to { ... }
/deep/ .swap-left-enter-to { ... }
/deep/ .swap-right-leave-to { ... }
/deep/ .swap-right-enter-to { ... }
</style>
```

<TabDemo />

---

## Form demo

Easily add `Swap` anywhere in your app as long as the content changes, with a `v-if` or a `router-view` for instance.

```vue
<template>
  <Swap :direction="tab === 'login' ? 'right' : 'left'">
    <form v-if="tab === 'login'" key="login"> ... </form>
    <form v-if="tab === 'pwd'" key="pwd"> ... </form>
  </Swap>
</template>

<script>
import { Swap } from 'vue-swap'

export default {
  components: {
    Swap,
  },
  data() {
    return {
      tab: 'login',
    }
  },
}
</script>
```

<FormDemo />

---
home: true
heroImage: /vue-swap.svg
heroText: vue-swap
tagline: Vue minimalist component to horizontally swap between items
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

Use it for simple horizontal slideshow, like a tab system, onboarding process or form wizard. Its height will adapt to the tallest element displayed without animation because it's very bad for performances.

## Demo

Set a `key` to your components to trigger the animation, and wrap them with `Swap`.

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

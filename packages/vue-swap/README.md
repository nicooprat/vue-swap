<img src="./packages/docs/src/.vuepress/public/vue-swap.svg" alt="logo" width="128">

# vue-swap

Vue functional component to horizontally swap between items

[Demo & docs](https://vue-swap.netlify.app/)

## Quick start

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

## Installation

Install the `vue-swap` package:

```sh
npm i vue-swap
```

Or

```sh
yarn add vue-swap
```

## Thanks & credits

This repo is based on @Akryum https://github.com/Akryum/vue-mention.

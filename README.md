# svelte-gesture

[![npm (tag)](https://img.shields.io/npm/v/svelte-gesture?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/svelte-gesture) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/svelte-gesture?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/svelte-gesture?style=flat&colorA=000000&colorB=000000)

svelte-gesture is a library that lets you bind richer mouse and touch events to any component or view. With the data you receive, it becomes trivial to set up gestures, and often takes no more than a few lines of code.

Each recognizer is implemented as an action that emits custom events. To make the most of it you should combine it with Svelte's [spring](https://svelte.dev/tutorial/spring) function.

## Install

```bash
npm install svelte-gesture
```

## Usage

```svelte
<script>
  import { spring } from 'svelte/motion'
  import { drag } from 'svelte-gesture'

  let coords = spring({ x: 0, y: 0 })

  function handler({ detail }) {
    const {
      active,
      movement: [mx, my]
    } = detail

    coords.set({
      x: active ? mx : 0,
      y: active ? my : 0
    })
  }
</script>

<div use:drag on:drag={handler} style="transform: translate({$coords.x}px, {$coords.y}px)"></div>
```

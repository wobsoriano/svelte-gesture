<script lang="ts">
  import { spring } from 'svelte/motion';
  import { drag, GestureEvent } from 'svelte-gesture'

  let coords = spring({ x: 0, y: 0 });

  function handler({ detail }: CustomEvent<GestureEvent<'pinch'>>) {
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

<div
  class="box"
  use:drag
  on:drag={handler}
  style="transform: translate({$coords.x}px, {$coords.y}px)"
></div>

<style>
  .box {
    background: skyblue;
    height: 100px;
    width: 100px;
    touch-action: none;
    cursor: move;
    cursor: grab
  }

  .box:active {
    cursor: grabbing;
  }
</style>

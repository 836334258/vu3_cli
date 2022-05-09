<template>
  <div>
    <div class="parent">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <article>3</article>
    <div class="flex">
      <h2>123</h2>
      <h2>123</h2>
      <h2>123</h2>
      <h2>123</h2>
    </div>
    <div class="grid">
      <h2>123</h2>
      <h2>123</h2>
      <h2>123</h2>
      <h2>123</h2>
    </div>
  </div>
  <button @click="clickBtn">click</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const a = ref<string>('afd')
console.log(a)

const clickBtn = (e) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
::selection {
  color: brown;
}
.left {
  height: 200px;
  width: 200px;
  background-color: antiquewhite;
  float: left;
}
.right {
  height: 200px;
  overflow: hidden; // 触发bfc
  background-color: aqua;
}
article {
  width: 100%;
  font-size: 12rem;
  // column-count: 3;
  columns: 200px 3;
  column-gap: 5rem;
}
.flex {
  display: flex;
  place-items: center;
  place-content: center;
  h2 {
    flex: 1;
  }
}
.grid {
  display: grid;
  grid-template-columns: minmax(50px, 100px) 1fr 1fr 1fr;
  place-items: center;
}
</style>

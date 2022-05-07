<template>
  <div :class="{ close: !sideBarStatus }" class="sidebar">
    <div @click="changeSideBarState1" class="trigger">
      <span :class="{ rotate: !sideBarStatus }">></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSideBarStatus from '@/hooks/useSideBarStatus'

const [sideBarStatus, changeSideBarState] = useSideBarStatus()

const changeSideBarState1 = () => {
  changeSideBarState(!sideBarStatus.value)
}
const openSideBar = () => {
  changeSideBarState(true)
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  right: 0;
  top: 0;
  background-color: black;
  transition: transform 0.2s;
  .trigger {
    width: 10px;
    height: 20px;
    position: absolute;
    top: 50%;
    background-color: aqua;
    color: aliceblue;
    transform: translateY(-100%) translateX(-100%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.close {
  transform: translateX(100%);
}
.rotate {
  transform: rotateY(-180deg);
}
</style>

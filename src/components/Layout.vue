<template>
  <div>
    <n-config-provider :theme="theme">
      <n-space vertical size="large">
        <n-layout has-sider>
          <n-layout-sider
            bordered
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <n-menu
              v-model:value="activeKey"
              :collapsed="collapsed"
              :collapsed-width="64"
              :collapsed-icon-size="22"
              :options="menuOptions"
            />
          </n-layout-sider>
          <n-layout>
            <n-card>
              <n-space>
                <n-button @click="theme = darkTheme"> 深色 </n-button>
                <n-button @click="theme = null"> 浅色 </n-button>
              </n-space>
            </n-card>
            <router-view />
          </n-layout>
        </n-layout>
      </n-space>
    </n-config-provider>
  </div>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { ref, h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const theme = ref<GlobalTheme | null>(null)
const collapsed = ref<boolean>(true)
const activeKey = ref<string | null>(null)
const menuOptions = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
]
</script>

<style scoped></style>

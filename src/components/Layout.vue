<template>
  <div class="layout-wrapper">
    <n-config-provider :theme="theme">
      <n-space vertical size="large">
        <n-layout-header bordered class="layout-header">
          <n-menu
            v-model:value="headerMenuActiveKey"
            mode="horizontal"
            :options="headerMenuOptions"
          />
        </n-layout-header>
        <n-layout has-sider>
          <n-layout-sider
            class="admin-sider"
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
import { darkTheme, MenuOption } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { ref, h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
import { getLayoutChildren } from '@/router'
import { RouterLink } from 'vue-router'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const theme = ref<GlobalTheme | null>(null)
const collapsed = ref<boolean>(false)
const activeKey = ref<string | null>(null)
const headerMenuActiveKey = ref<string | null>(null)
const menuLayOutOptions = getLayoutChildren()
const menuOptions = menuLayOutOptions.map((meun) => {
  return {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: meun.name,
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => meun.name }
      ),
    key: meun.name,
  }
})

const headerMenuOptions = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100vh;
  width: 100vw;
}
.admin-sider {
  height: calc(100vh - 60px);
}
.layout-header {
  margin-bottom: 0 !important;
}
</style>

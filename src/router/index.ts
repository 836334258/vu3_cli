import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export function getLayoutChildren() {
  const componentsPath = import.meta.glob('../components/**/*.ts')
  const layoutChildren = []
  for (const componentPath in componentsPath) {
    const name = componentPath.split('/')[2]
    const path: string = '/' + name.replace(/^(.)/, (match, p1) => p1.toLowerCase())
    layoutChildren.push({
      path: path,
      name: name,
      component: componentsPath[componentPath],
    })
  }
  return layoutChildren
}

const layoutChildren = getLayoutChildren()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/Layout.vue'),
    children: layoutChildren,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

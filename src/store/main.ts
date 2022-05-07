import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    name: '超级管理员',
    sideBarStatus: false,
  }),
  actions: {
    changeSideBarState(status: boolean): void {
      this.sideBarStatus = status
    },
  },
})

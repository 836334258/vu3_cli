import { storeToRefs } from 'pinia'
import { useMainStore } from './../store/main'
export default function useSideBarStatus() {
  const store = useMainStore()
  const { sideBarStatus } = storeToRefs(store)
  const changeSideBarState = store.changeSideBarState
  return [sideBarStatus, changeSideBarState] as const
}

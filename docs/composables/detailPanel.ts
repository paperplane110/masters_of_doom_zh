export type DetailKey = string

export const useDetailPanel = () => {
  const isOpen = useState<boolean>('detail-panel:isOpen', () => false)
  const key = useState<DetailKey | null>('detail-panel:key', () => null)

  const open = (nextKey: DetailKey) => {
    key.value = nextKey
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = (nextKey: DetailKey) => {
    if (isOpen.value && key.value === nextKey) {
      close()
      return
    }
    open(nextKey)
  }

  return { isOpen, key, open, close, toggle }
}

<script setup lang="ts">
import { details } from '~/data/details'

const { isOpen, key, close } = useDetailPanel()

const drawerRef = ref<HTMLElement | null>(null)
const sidebarRef = ref<HTMLElement | null>(null)

const entry = computed(() => (key.value ? details[key.value] : undefined))

const title = computed(() => entry.value?.title ?? '')
const content = computed(() => entry.value?.content ?? '')

const isHtml = computed(() => {
  const c = content.value
  return /<[^>]+>/.test(c)
})

const isClickInsidePanel = (target: EventTarget | null) => {
  if (!target || !(target instanceof Node)) return false
  if (drawerRef.value?.contains(target)) return true
  if (sidebarRef.value?.contains(target)) return true
  return false
}

const onDocumentClick = (e: MouseEvent) => {
  if (!isOpen.value) return
  if (isClickInsidePanel(e.target)) return
  close()
}

const onDocumentKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return
  if (e.key !== 'Escape') return
  close()
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick, true)
  document.addEventListener('keydown', onDocumentKeydown, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick, true)
  document.removeEventListener('keydown', onDocumentKeydown, true)
})
</script>

<template>
  <div class="fixed inset-0 z-50 pointer-events-none">
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition-transform duration-300 ease-in-out"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-full"
    >
      <div
        v-show="isOpen"
        ref="drawerRef"
        class="sm:hidden fixed inset-x-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 max-h-[80vh] overflow-auto pointer-events-auto"
      >
        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {{ title }}
          </div>
          <button class="px-3 py-1 text-sm text-gray-600 dark:text-gray-300" @click="close">
            Close
          </button>
        </div>
        <div v-if="isHtml" class="px-4 py-4 prose max-w-none dark:prose-invert" v-html="content" />
        <div v-else class="px-4 py-4 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
          {{ content }}
        </div>
      </div>
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in-out"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-show="isOpen"
        ref="sidebarRef"
        class="hidden sm:block fixed top-0 right-0 h-full w-[420px] max-w-[90vw] bg-white dark:bg-gray-800 shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 overflow-auto pointer-events-auto"
      >
        <div class="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <div class="font-semibold text-gray-900 dark:text-gray-100 truncate">
            {{ title }}
          </div>
          <button class="px-3 py-1 text-sm text-gray-600 dark:text-gray-300" @click="close">
            Close
          </button>
        </div>
        <div v-if="isHtml" class="px-5 py-5 prose max-w-none dark:prose-invert" v-html="content" />
        <div v-else class="px-5 py-5 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
          {{ content }}
        </div>
      </div>
    </Transition>
  </div>
</template>

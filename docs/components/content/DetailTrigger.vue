<script setup lang="ts">
const props = defineProps<{
  id: string
}>()

const { open } = useDetailPanel()
</script>

<template>
  <span
    class="cursor-pointer underline underline-offset-4 decoration-dotted hover:decoration-solid hover:text-primary-500 dark:hover:text-primary-400"
    role="button"
    tabindex="0"
    @click="open(props.id)"
    @keydown.enter.prevent="open(props.id)"
    @keydown.space.prevent="open(props.id)"
  >
    <slot />
  </span>
</template>

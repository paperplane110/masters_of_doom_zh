<template>
    <NuxtLink
      :href="href"
      :target="target"
    >
      <b>
          <slot />
      </b>
      <Icon v-if="target === '_blank'" class="mr-1 mb-1" name="ph:arrow-square-out-bold"/>
    </NuxtLink>
  </template>
  
  <script setup lang="ts">
  import type { PropType } from 'vue'
  
  defineProps({
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined>,
      default: '_blank',
      required: false
    }
  })
  </script>
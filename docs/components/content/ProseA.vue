<template>
    <NuxtLink
      :href="href"
      :target="target"
    >
      <b>
          <slot />
      </b>
      <Icon class="mr-1 mb-1" name="ph:link-bold"/>
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
      default: undefined,
      required: false
    }
  })
  </script>
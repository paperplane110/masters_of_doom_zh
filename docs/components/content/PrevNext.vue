<script setup lang="ts">
const route = useRoute()
const [prev, next] = await queryContent('/')
  .only(['_path', 'title'])
  .where({ _partial: false })
  .findSurround(route.path)
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <NuxtLink class="px-4 py-2 border !border-solid rounded-md hover:border-emerald-300" :to="prev ? prev._path : '/'">
        <p class="text-gray-500 text-sm">{{ prev ? "上一章" : "📚" }}</p>
        {{ prev ? prev.title : '回到封面' }}
    </NuxtLink>
    <NuxtLink :to="next ? next._path : '/'" class="px-8 py-2 border !border-solid rounded-md text-right hover:border-emerald-300">
      <p class="text-gray-500 text-sm">{{ next ? "下一章" : "📚" }}</p>
      {{ next ? next.title : '回到封面' }}
    </NuxtLink>
  </div>
</template>
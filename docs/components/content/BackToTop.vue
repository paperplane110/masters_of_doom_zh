<template>
  <Transition>
    <div v-if="isVisible" :class="[
      'fixed top-[1rem] left-1/2 -translate-x-[50%] z-10',
      'cursor-pointer flex items-center bg-white dark:bg-slate-900 px-2 py-2 border rounded-full space-x-1',
    ]">
      <div :class="[
        'size-6 rounded-full flex items-center justify-center',
        'hover:text-green-500 dark:hover:text-green-500',
        'transition-all duration-150'
      ]" @click="scrollToTop">
        <Icon name="lets-icons:up" />
      </div>
      <div class="text-sm text-gray-200">|</div>
      <NuxtLink :to="prev ? prev._path : '/'" :class="['!border-none']">
        <div :class="[
          'size-6 rounded-full flex items-center justify-center',
          'hover:text-green-500 dark:hover:text-green-500',
          'transition-all duration-150'
        ]">
          <Icon name="lets-icons:arrow-left" />
        </div>
      </NuxtLink>
      <div class="text-sm text-gray-200">|</div>
      <NuxtLink :to="next ? next._path : '/'" :class="['!border-none']">
        <div :class="[
          'size-6 rounded-full flex items-center justify-center',
          'hover:text-green-500 dark:hover:text-green-500',
          'transition-all duration-150'
        ]">
          <Icon name="lets-icons:arrow-right" />
        </div>
      </NuxtLink>
    </div>
  </Transition>
</template>

<script setup>
const isVisible = ref(false)
const isLeaveTop = ref(false)
const prevY = ref(0)
const scrollDirection = ref("down")

const route = useRoute()
const [prev, next] = await queryContent('/')
  .only(['_path', 'title'])
  .where({ _partial: false })
  .findSurround(route.path)

const handleScroll = () => {
  const windowHeight = window.innerHeight
  const scrollPos = window.scrollY ||
    document.documentElement.scrollTop

  if (scrollPos > prevY.value) {
    scrollDirection.value = "down"
  } else {
    scrollDirection.value = "up"
  }
  prevY.value = scrollPos

  isLeaveTop.value = scrollPos > (windowHeight / 2)
  if (isLeaveTop.value && (scrollDirection.value === "up")) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const scrollToTop = (e) => {
  e.preventDefault()
  e.stopPropagation()
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
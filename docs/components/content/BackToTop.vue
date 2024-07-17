<template>
    <Transition>
        <div 
            v-if="isVisible"
            :class="[
                'fixed top-[1rem] left-1/2 -translate-x-[50%] z-10',
                'cursor-pointer flex items-center bg-gray-50 dark:bg-slate-900 px-4 py-2 border border-gray-400 dark:border-slate-600 rounded-lg shadow-md ',
                'hover:border-green-500 hover:text-green-500 dark:hover:border-green-500 dark:hover:text-green-500',
                'transition-all duration-300'
            ]"
            @click="scrollToTop"
        >
            <Icon name="lets-icons:up" />
            回到顶部
        </div>
    </Transition>
</template>

<script setup>
const isVisible = ref(false)

const handleScroll = () => {
    const windowHeight = window.innerHeight
    const scrollPos = window.scrollY || 
        document.documentElement.scrollTop
    isVisible.value = scrollPos > (windowHeight / 2)
}

const scrollToTop = () => {
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
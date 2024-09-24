<template>
    <div class="inline">
        <span :class="[violang ? '': 'bg-gray-700 select-none']"><slot/></span>
        <sup v-if="!violang" class="font-bold">语言暴力</sup>
    </div>
</template>

<script setup>
const violang = useViolang()
</script>
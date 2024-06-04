<template>
    <div>
        <h1 class="font-pixel antialiased"><slot/></h1>
        <ProseBlockquote>{{ page.description }}</ProseBlockquote>
        <br/>
    </div>
</template>

<script setup lang="ts">
const { page } = useContent()
</script>
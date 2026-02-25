<script setup lang="ts">
import TitleBar from '@/components/TitleBar.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div class="app-window">
        <header>
            <TitleBar />
            <Navbar />
        </header>

        <main class="app-main">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.app-window {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    border: 1px solid var(--bg3);
}
.app-main {
    flex: 1;
    overflow-y: auto;
}
</style>

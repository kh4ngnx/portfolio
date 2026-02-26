<script setup lang="ts">
import TitleBar from "@/components/TitleBar.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
    <div class="app-window">
        <header class="app-header">
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
    height: 100vh;
    border: 1px solid var(--bg3);
}
.app-main {
    flex: 1;
    overflow-y: auto;
    padding: 2lh 2ch;
}
@media (max-width: 64rem) {
    .app-main {
        padding-bottom: calc(100px + env(safe-area-inset-bottom));
    }
}
</style>

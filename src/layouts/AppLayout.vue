<script setup lang="ts">
import TitleBar from '@/components/TitleBar.vue';
import Navbar from '@/components/Navbar.vue';
import StatusBar from '@/components/StatusBar.vue';
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

        <footer>
            <StatusBar />
        </footer>
    </div>
</template>

<style scoped>
.app-window {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.app-main {
    flex: 1;
    overflow-y: auto;
}
</style>

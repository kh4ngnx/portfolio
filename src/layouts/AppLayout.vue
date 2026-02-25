<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div class="layout">
        <header>
            <Navbar />            
        </header> 

        <main>
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.layout {
}
</style>

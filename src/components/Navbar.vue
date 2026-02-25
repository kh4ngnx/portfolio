<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const tabs = [
    { key: "about", path: "/about", icon: "", label: "about" },
    { key: "skills", path: "/skills", icon: "", label: "skills" },
    { key: "projects", path: "/projects", icon: "", label: "projects" },
    { key: "education", path: "/education", icon: "󱛉", label: "education" },
];
</script>
<template>
    <nav>
        <div class="desktop">
            <RouterLink
                class="tab"
                v-for="tab in tabs"
                :key="tab.key"
                :to="tab.path"
                :class="{ active: route.meta.tab === tab.key }"
            >
                <span class="icon">
                    {{ tab.icon }}
                </span>
                <span class="label">
                    {{ tab.label }}
                </span>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background: var(--bg1);

    .desktop {
        margin-left: 1ch;
        padding: 0 1ch;

        display: flex;
    }

    .tab {
        text-decoration: none;
        color: var(--grey1);
        border-left: 1px solid var(--bg3);
        padding: 0.5lh 2ch;

        display: flex;
        align-items: center;
        gap: 1ch;

        .icon {
            font-size: 12px;
        }
    }

    .tab:hover:not(.active) {
        color: var(--grey2);
        background: var(--bg2);
    }

    .tab:last-of-type {
        border-left: 1px solid var(--bg3);
        border-right: 1px solid var(--bg3);
    }

    .active {
        color: var(--green);
        background: var(--bg0);
        border-bottom: 2px solid var(--green);
        font-weight: 600;
        padding-bottom: 0.4lh;
    }
}
</style>

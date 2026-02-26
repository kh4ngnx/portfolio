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
    </nav>
</template>

<style scoped>
nav {
    background: var(--bg1);
    padding: 0 2ch;

    display: flex;

    .tab {
        text-decoration: none;
        color: var(--grey1);
        border-left: 1px solid var(--bg3);
        padding: 0.5lh 2ch;

        display: flex;
        align-items: center;
        gap: 1ch;
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

@media (max-width: 768px) {
    nav {
        width: 100%;
        padding: 0;
        padding-bottom: env(safe-area-inset-bottom);
        position: fixed;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .tab {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 0.5lh;
            align-items: center;
            padding: 1lh 0;
            color: var(--grey1);
            border-left: 1px solid var(--bg3);
            font-size: clamp(14px, 2.5vw, 20px);

            .icon {
                font-size: clamp(14px, 2.5vw, 20px);
            }
        }

        .tab:last-of-type {
            border-left: 1px solid var(--bg3);
            border-right: 1px solid var(--bg3);
        }

        .active {
            color: var(--green);
            background: var(--bg-green);
            font-weight: 600;
            border: none;
        }
    }
}
</style>

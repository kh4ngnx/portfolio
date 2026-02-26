<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize()
</script>
<template>
    <div class="bar">
        <div class="btns">
            <span class="close"></span>
            <span class="min"></span>
            <span class="max"></span>
        </div>

        <div v-if="width > 600" class="title">portfolio ~ nguyen-xuan-khang</div>
        <div v-else class="title">portfolio</div>

        <div class="size">{{ width }}×{{ height }}</div>
    </div>
</template>

<style scoped>
.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2ch;
    padding: 0.5lh 2ch;
    background: var(--bg1);
    border-bottom: 1px solid var(--bg3);

    .btns {
        display: flex;
        align-items: center;
        gap: 1ch;

        span {
            display: block;
            width: 15px;
            height: 15px;
        }

        .close {
            background: var(--red);
        }

        .min {
            background: var(--yellow);
        }

        .max {
            background: var(--green);
        }
    }

    .size {
        color: var(--grey2);
    }
}
</style>

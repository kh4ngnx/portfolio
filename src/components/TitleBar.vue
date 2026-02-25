<template>
    <div class="bar">
        <div class="btns">
            <span class="close"></span>
            <span class="min"></span>
            <span class="max"></span>
        </div>

        <span class="title">portfolio ~ nguyen-xuan-khang</span>

        <span class="size">80×24</span>
    </div>
</template>

<style scoped>
.bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5lh 2ch;
    background: var(--bg1);
    border-bottom: 1px solid var(--bg3);

    .btns {
        display: flex;
        align-items: center;
        gap: 1ch;

        span {
            display: block;
            width: 20px;
            height: 20px;
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

<template>
    <div class="bar">
        <div class="btns">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <span class="title"> portfolio ~ nguyen-xuan-khang </span>

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
    border-bottom: 1px solid var(--grey0);

    .btns {
        display: flex;
        align-items: center;
        gap: 1ch;
    }

    .btns span {
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid var(--grey0);
        background: var(--bg-dim);
    }

    .size {
        color: var(--grey1);
    }
}
</style>

<template>
    <h2>// PROJECTS [2]</h2>

    <div class="container">
        <div class="item">
            <div class="title">
                <h3>Web Thương Mại Điện Tử</h3>
            </div>
            <div class="tech-stack">
                <span>Laravel</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>TailwindCSS</span>
            </div>
            <div class="link">
                <span class="icon"></span>
                <a href="https://github.com/kh4ngnx/laravel-ecom" target="_blank"
                    >github.com/kh4ngnx/laravel-ecom</a
                >
            </div>
        </div>
        <div class="item">
            <div class="title">
                <h3>Git Commit CLI</h3>
            </div>
            <div class="tech-stack">
                <span>Node.js</span>
                <span>Javascript</span>
            </div>
            <div class="link">
                <span class="icon"></span>
                <a href="https://github.com/kh4ngnx/git-commit-cli" target="_blank"
                    >github.com/kh4ngnx/git-commit-cli</a
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-bottom: 1.5lh;
    padding-bottom: 0.5lh;
    color: var(--grey0);
    font-size: 20px;
    border-bottom: 2px dashed var(--bg3);
}

.container {
    display: flex;
    flex-direction: column;
    gap: 1lh;
}

.item {
    border: 1px solid var(--bg4);
    background: var(--bg2);
    padding: 1lh 2ch;

    &:hover {
        background: var(--bg1);
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5lh;
        gap: 4ch;

        h3 {
            font-size: 20px;
        }

        span {
            background: var(--bg-yellow);
            color: var(--yellow);
            padding: 0.2lh 1ch;
        }
    }

    .tech-stack {
        display: flex;
        gap: 1ch;
        flex-wrap: wrap;
        span {
            background: var(--bg-blue);
            color: var(--blue);
            padding: 0.2lh 1ch;
        }
    }

    .link {
        margin-top: 1lh;
        border: 1px dashed var(--bg4);
        color: var(--aqua);
        padding: 0.5lh 2ch;
        font-size: clamp(14px, 2.5vw, 16px);

        a {
            margin-left: 2ch;
            color: var(--aqua);
        }
    }
}
</style>

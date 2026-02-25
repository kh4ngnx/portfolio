<template>
    <div class="layout">
        <section class="frontend">
            <span class="title">frontend</span>
            <div class="container">
                <h2> Frontend</h2>
                <ul marker-="open tree">
                    <li>
                        <span class="label">HTML5 / CSS3</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 8"></span>
                            <span>80%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">Javascript</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 4"></span>
                            <span>40%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">Vue.js</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 5.5"></span>
                            <span>55%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">TailwindCSS</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 6.3"></span>
                            <span>63%</span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="backend">
            <span class="title">backend</span>
            <div class="container">
                <h2> Backend</h2>
                <ul marker-="open tree">
                    <li>
                        <span class="label">PHP</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 5"></span>
                            <span>50%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">Laravel</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 7"></span>
                            <span>70%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">MySQL</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 3.6"></span>
                            <span>36%</span>
                        </span>
                    </li>
                    <li>
                        <span class="label">REST API</span>
                        <span class="bar">
                            <span is-="progress" style="--progress-value: 8.4"></span>
                            <span>84%</span>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="tools">
            <span class="title">tools</span>
            <h2> Tools & Others</h2>
            <div class="container">
                <span>Git</span>
                <span>DB Design</span>
                <span>Branch / Commit</span>
            </div>
        </section>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    gap: 2ch;
    justify-content: space-between;
}

.frontend,
.backend,
.tools {
    flex: 1;
    background: var(--bg2);
    padding: 1lh 2ch;
    border: 1px solid var(--bg3);
    position: relative;

    &:hover {
        background: var(--bg1);
    }

    h2 {
        color: var(--green);
        margin-bottom: 0.7lh;
    }

    .title {
        position: absolute;
        top: -0.5lh;
        left: 2ch;
        color: var(--aqua);
        background: var(--bg2);
        padding: 0 1ch;
        border: 1px solid var(--bg3);
    }

    ul {
        margin: 0 1ch;

        li {
            margin-bottom: 0.5lh;
        }

        li:last-of-type {
            margin-bottom: 0;
        }
    }

    .bar {
        float: right;
        display: flex;
        gap: 2ch;
        width: 15ch;
    }
}

.tools {
    .container {
        display: flex;
        gap: 1ch;
        span {
            background: var(--bg-blue);
            color: var(--blue);
            padding: 0.2lh 1ch;
        }
    }
}
</style>

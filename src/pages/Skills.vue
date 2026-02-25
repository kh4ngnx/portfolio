<template>
    <h2>// SKILLS</h2>
    <div class="layout">
        <section class="frontend">
            <span class="title">frontend</span>
            <div class="container">
                <h2>
                    <span class="icon"></span>
                    Frontend
                </h2>
                <ul>
                    <li>
                        <span class="label">├─ HTML5 / CSS3</span>
                        <div class="bar">
                            <div class="track" style="width: 90%"></div>
                        </div>
                        <span>90%</span>
                    </li>
                    <li>
                        <span class="label">├─ Javascript</span>
                        <div class="bar">
                            <div class="track" style="width: 40%"></div>
                        </div>
                        <span>40%</span>
                    </li>
                    <li>
                        <span class="label">├─ Vue.js</span>
                        <div class="bar">
                            <div class="track" style="width: 55%"></div>
                        </div>
                        <span>55%</span>
                    </li>
                    <li>
                        <span class="label">└─ TailwindCSS</span>
                        <div class="bar">
                            <div class="track" style="width: 63%"></div>
                        </div>
                        <span>63%</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="backend">
            <span class="title">backend</span>
            <div class="container">
                <h2>
                    <span class="icon"></span>
                    Backend
                </h2>
                <ul marker-="open tree">
                    <li>
                        <span class="label">├─ PHP</span>
                        <div class="bar">
                            <div class="track" style="width: 50%"></div>
                        </div>
                        <span>50%</span>
                    </li>
                    <li>
                        <span class="label">├─ Laravel</span>
                        <div class="bar">
                            <div class="track" style="width: 70%"></div>
                        </div>
                        <span>70%</span>
                    </li>
                    <li>
                        <span class="label">├─ MySQL</span>
                        <div class="bar">
                            <div class="track" style="width: 36%"></div>
                        </div>
                        <span>36%</span>
                    </li>
                    <li>
                        <span class="label">└─ REST API</span>
                        <div class="bar">
                            <div class="track" style="width: 84%"></div>
                        </div>
                        <span>84%</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="tools">
            <span class="title">tools</span>
            <h2>
                <span class="icon"></span>
                Tools & Others
            </h2>
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

h2 {
    margin-bottom: 1.5lh;
    padding-bottom: 0.5lh;
    color: var(--grey0);
    font-size: 20px;
    border-bottom: 2px dashed var(--bg3);
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
        border: none;
        color: var(--green);
        padding-bottom: 0;
        margin: 0.3lh 0 0.7lh;
        display: flex;
        align-items: center;
        gap: 1ch;
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
        margin-right: 1ch;
        li::before {
            content: "";
        }

        li {
            margin-bottom: 1lh;
            display: flex;
            gap: 2ch;

            .label {
                flex: 1;
            }
        }

        li:last-of-type {
            margin-bottom: 0;
        }
    }

    .bar {
        background: var(--bg3);
        border: 1px solid var(--bg4);
        height: auto;
        flex: 1;
        max-width: 15ch;

        .track {
            height: 100%;
            background: var(--green);
            opacity: 0.8;
        }
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

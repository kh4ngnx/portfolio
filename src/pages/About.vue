<template>
    <section class="whoami">
        <span class="title">whoami</span>

        <div class="container">
            <span class="name">NGUYỄN XUÂN KHANG</span>
            <span class="position">
                <span class="icon"></span>
                <span class="label">Full-Stack Developer</span>
            </span>
            <span class="location">
                <span class="icon"></span>
                <span class="label">TP. Hồ Chí Minh, Việt Nam</span>
            </span>
            <span class="phone">
                <span class="icon"></span>
                <span class="label">033 259 3229</span>
            </span>
            <span class="email">
                <span class="icon"></span>
                <span class="label">nguyen2004xuankhang@gmail.com</span>
            </span>
            <span class="github">
                <span class="icon"></span>
                <a href="https://github.com/kh4ngnx" target="_blank">github.com/kh4ngnx</a>
            </span>
        </div>
    </section>

    <section class="myself">
        <ul class="summary">
            <li style="color: var(--grey2)">Sinh viên năm 4</li>
            <li class="tech">
                <span style="color: var(--aqua)">Vue</span> •
                <span style="color: var(--red)">Laravel</span> •
                <span style="color: var(--orange)">MySQL</span>
            </li>
            <li style="color: var(--yellow)">RESTful API</li>
            <li><strong style="color: var(--green)">Leader</strong> dự án thực tế...</li>
        </ul>
        <div class="student-year">
            <strong style="color: var(--green)">4th</strong>
            <p>year student</p>
        </div>
        <div class="toeic">
            <strong style="color: var(--yellow)">900</strong>
            <p>TOEIC score</p>
        </div>
        <div class="projects">
            <strong style="color: var(--aqua)">1+</strong>
            <p>real projects</p>
        </div>
        <div class="gpa">
            <strong style="color: var(--blue)">2.64</strong>
            <p>GPA / 4.0</p>
        </div>
    </section>
</template>

<style scoped>
.whoami {
    background: var(--bg2);
    border: 1px solid var(--bg3);
    position: relative;

    .title {
        position: absolute;
        top: -0.5lh;
        left: 2ch;
        color: var(--aqua);
        background: var(--bg2);
        padding: 0 1ch;
        border: 1px solid var(--bg3);
    }

    .container {
        margin: 1lh 2ch;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-areas:
            "name phone"
            "position email"
            "location github";
        column-gap: 2ch;
        row-gap: 0.5lh;

        .name,
        .position,
        .location,
        .phone,
        .email,
        .github {
            border: 1px dashed var(--bg4);
            padding: 0.5lh 2ch;

            display: flex;
            align-items: center;
            gap: 2ch;

            &:hover {
                background: var(--bg1);
            }
        }

        .name {
            grid-area: name;
            font-weight: bold;
            font-size: 20px;
            padding-left: 1.5ch;
        }
        .position {
            grid-area: position;
            color: var(--yellow);
        }
        .location {
            grid-area: location;
            color: var(--grey2);
        }
        .phone {
            grid-area: phone;
            color: var(--red);
        }
        .email {
            grid-area: email;
            color: var(--blue);
        }
        .github {
            grid-area: github;
            color: var(--aqua);

            a {
                color: var(--aqua);
            }
        }
    }
}

.myself {
    margin-top: 3lh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        "summary summary summary summary"
        "student-year toeic projects gpa";
    column-gap: 2ch;
    row-gap: 1lh;

    .student-year,
    .toeic,
    .projects,
    .gpa {
        background: var(--bg2);
        padding: 0.5lh 2ch;
        border: 1px dashed var(--bg4);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.2lh;

        strong {
            font-size: 36px;
        }

        p {
            color: var(--grey1);
        }

        &:hover {
            background: var(--bg1);
        }
    }

    .summary {
        background: var(--bg2);
        padding: 0.5lh 2ch;
        border: 1px dashed var(--bg4);
        grid-area: summary;
        border-left: 4px solid var(--green);
        color: var(--grey2);

        &:hover {
            background: var(--bg1);
        }

        li {
            margin-bottom: 0.3lh;
            color: var(--grey2);

            .tech {
                font-weight: bold;
            }
        }

        li:last-of-type {
            margin-bottom: 0;
        }
    }
}
</style>

<template>
    <div class="layout">
        <section class="education">
            <h2>// HỌC VẤN</h2>
            <div class="container">
                <span class="title">education</span>
                <div class="content">
                    <div class="school">
                        <h3>Đại học Sư phạm TP. HCM</h3>
                        <span>2022 - 2027</span>
                    </div>
                    <div class="major">Công nghệ Thông tin</div>
                    <div class="gpa" style="color: var(--yellow);">GPA: 2.64 / 4.0</div>
                </div>
            </div>
        </section>
        <section class="certificate">
            <h2>// CHỨNG CHỈ</h2>
            <div class="container">
                <span class="title">certificate</span>
                <div class="content">
                    <span class="icon" style="color: var(--blue);"></span>
                    <div class="info">
                        <h3>TOEIC</h3>
                        <span>Listening & Reading</span>
                    </div>
                    <strong class="score" style="color: var(--yellow);">900</strong>
                </div>
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

.education, .certificate {
    flex: 1;

    h2 {
        margin-bottom: 1.5lh;
        padding-bottom: 0.5lh;
        color: var(--grey0);
        font-size: 20px;
        border-bottom: 2px dashed var(--bg3);
    }
}

.container {
    background: var(--bg2);
    border: 1px solid var(--bg3);
    color: var(--grey2);
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

    .content {
        margin: 1lh 2ch;

        .school {
            display: flex;
            gap: 2ch;
            justify-content: space-between;
            align-items: center;

            h3, span {
                border: 1px dashed var(--bg3);
                padding: 0.5lh 1ch;
            }

            h3 {
                flex: 1;
                color: var(--fg);
            }
        }

        .major, .gpa {
            border: 1px dashed var(--bg3);
            padding: 0.5lh 1ch;
            margin-top: 0.5lh;
        }
    }
}

.certificate {
    .content {
        display: flex;
        align-items: center;
        gap: 2ch;
        justify-content: space-between;

        .icon, .score {
            font-size: 48px;
            padding: 0.5lh 0.5ch;
        }

        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 1ch;
            h3, span {
                border: 1px dashed var(--bg3);
                padding: 0.5lh 2ch;
            }

            h3 {
                color: var(--fg);
            }
        }
    }
}

@media (max-width: 64rem) {
    .layout {
        flex-direction: column;
    }
}
</style>

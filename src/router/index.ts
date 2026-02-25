import AppLayout from "@/layouts/AppLayout.vue";
import About from "@/pages/About.vue";
import Education from "@/pages/Education.vue";
import Projects from "@/pages/Projects.vue";
import Skills from "@/pages/Skills.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: AppLayout,
            children: [
                { path: "", redirect: "/about" },
                {
                    path: "about",
                    component: About,
                    meta: { tab: "about" },
                },
                {
                    path: "skills",
                    component: Skills,
                    meta: { tab: "skills" },
                },
                {
                    path: "projects",
                    component: Projects,
                    meta: { tab: "projects" },
                },
                {
                    path: "education",
                    component: Education,
                    meta: { tab: "education" },
                },
            ],
        },
        {
            path: "/:pathMath(.*)*",
            redirect: "/about",
        },
    ],
});

export default router;

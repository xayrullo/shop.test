import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from "./utils/auth.guard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import("./views/app"),
        redirect: `/dashboard`,
        meta: { loginRequired: true },
        children: [
            {
                name: "Dashboard",
                path: "dashboard",
                component: () =>
                    import("./views/app/dashboard")
            },
            {
                name: "Products",
                path: "products",
                component: () =>
                    import("./views/app/products")
            },
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("./views/login")
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("./views/register")
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
});
router.beforeEach(AuthGuard);
export default router;

import store from '../store'
const isAuthGuardActive = true;
export default (to, from, next) => {
    if (to.matched.some((record) => record.meta.loginRequired)) {
        if (isAuthGuardActive) {
            if (localStorage.getItem("token") || store.getters.token) {
                store.dispatch("setToken", localStorage.getItem("token"));
                store.dispatch("setUser", JSON.parse(localStorage.getItem("user")));
                if (to.path === "/") {
                    next("/");
                } else {
                    next();
                }
            } else {
                next({ path: "/login" });
            }
        }
    } else {
        next();
    }
}
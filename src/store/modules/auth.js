
export default {
    state: {
        token: null,
        user: {},
        loading: false,
        error: null
    },
    getters: {
        token: state => state.token,
        currentUser: state => state.user,
        fetchToken: state => state.loading,
        authError: state => state.error
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload
        },
        FETCH_TOKEN(state, payload) {
            state.loading = payload
        },
        REMOVE_TOKEN(state, payload) {
            state.token = payload
        },
        SET_USER(state, payload) {
            state.user = payload
        },
        ERROR_AUTH(state, payload) {
            state.error = payload
        },
    },
    actions: {
        setToken({ commit }, payload) {
            commit('SET_TOKEN', payload)
        },
        setUser({ commit }, payload) {
            commit('SET_USER', payload)
        },
        login({ commit, dispatch }, payload) {
            commit('FETCH_TOKEN', true)
            return new Promise((resolve, reject) => {
                localStorage.setItem('token', 'user submitted')
                commit('SET_TOKEN', 'user submitted')
                resolve()
                commit('FETCH_TOKEN', false)
            })
        },

        async signOut({ commit }) {
            commit('REMOVE_TOKEN', null)
            await localStorage.removeItem('token')
            await localStorage.removeItem('user')
            return 'Token Deleted'
        }
    }
}

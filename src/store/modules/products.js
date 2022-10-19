import data from "@/data/products";
const state = {
    loading: true,
    deleting: false,
    products: [],
    product: {},
    error: {},
    pagination: {
      current: 1,
      length: 12
    },
};

const getters = {
    getProductLoading: (state) => state.loading,
    getProductDeleting: (state) => state.deleting,
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getProductError: (state) => state.error,
    getProductPagination: (state) => state.pagination,
};

const mutations = {
    LOADING(state, payload) {
        state.loading = payload;
    },
    ERROR(state, payload) {
        state.error = payload;
    },
    DELETING(state, payload) {
        state.deleting = payload;
    },
    SET_PRODUCTS(state, payload) {
        state.products = payload;
    },
    UPDATE_PRODUCTS(state, payload) {
        const index = state.products.findIndex((res) => res.id === payload.id);
        state.products.splice(index, 1, payload);
    },
};

const actions = {
    getProducts({ commit, state }, payload) {
        commit("LOADING", true);
        return new Promise((resolve, reject) => {
            const _res = data.products;
            commit("SET_PRODUCTS", _res);
            resolve(_res);
            commit("LOADING", false);
        });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};

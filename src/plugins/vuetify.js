import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
       primary: '#7957d5',
    },
 });

const opts = {}

export default new Vuetify(opts)

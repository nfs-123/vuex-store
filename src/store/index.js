import Vuex  from 'vuex'
import Vue from 'vue'
import todos from './modules/todos.js'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        todos
    },
    plugins: [createPersistedState()]

})
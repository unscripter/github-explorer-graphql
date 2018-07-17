import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    plugins: [createLogger()]
});

import { SHOW_HIDE_NAVIGATION } from '../constants/constant'


const state = {
    isVisible: false,
}

const getters = {
    visible: state => state.isVisible
}

const mutations = {
    [SHOW_HIDE_NAVIGATION](state) {
        state.isVisible = !state.isVisible
    }
}

export default {
    state,
    mutations,
    getters
}
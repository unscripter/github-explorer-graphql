import { SHOW_HIDE_MODAL_TAB_MODAL } from '../constants/constant'

const state = {
    tabModal: false,
}

const getters = {
    tabModal: state => state.tabModal
}

const mutations = {
    [SHOW_HIDE_MODAL_TAB_MODAL](state, payload) {
        switch(payload.type) {
            case 'tabModal':
                state.tabModal = payload.open ? state.tabModal = true : state.tabModal = false;
                break;
            default:
                state.tabModal = false;
        }
    }
}

export default {
    state,
    mutations,
    getters
}
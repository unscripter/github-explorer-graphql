import { SET_CURRENT_REPO_DETAILS, SET_TOTAL_REPO_COUNT } from '../constants/constant'


const state = {
    totalRepos: 0,
    repo: {
    name: '',
    description: ''
    }
}

const getters = {
    repoCount: state => state.totalRepos,
    currentRepoDetail: state => state.repo
}

const mutations = {
    [SET_CURRENT_REPO_DETAILS](state, { name, description }) {
        debugger
        state.repo.name = name;
        state.repo.description = description;
    },
    [SET_TOTAL_REPO_COUNT](state, count) {
        state.totalRepos = count;
    }
}

export default {
    state,
    mutations,
    getters
}
import { SET_CURRENT_COMPONENT_TEXT, FETCH_CURRENT_COMPONENT_DATA } from '../constants/constant'
import gql from 'graphql-tag'

const state = {
    currentComponent: '',
    currentData: null,
    loading: true
}

const getters = {
    currentComponentText: state => state.currentComponent,
    currentComponentData: state => state.currentData,
    loadingCurrentCompData: state => state.loading
}
const fetchObj = {
    fetchIssueComments({ commit, apolloClient }) {
        debugger;
        apolloClient.query({
            query: gql`query User($login: String!, $last: Int!) {
                user(login: $login) {
                issueComments(last: $last) {
                  totalCount
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                    startCursor
                  }
                  edges {
                    cursor
                    node {
                      createdAt
                      bodyText
                      issue {
                        closed
                        bodyText    
                        createdAt
                        closedAt
                      }
                      repository{
                        name
                      }
                    }
                    
                  }
                }
            }
        }`,
            variables: {
                login: "AmitMundra54",
                last: 10,
            }
        }).then( (data, loading ) => {
            debugger;
            console.log("data", data);
            commit(FETCH_CURRENT_COMPONENT_DATA, { data });
        }).catch(error => {
            console.log("error", error);
            debugger
        })
    }
}

const mutations = {
    [SET_CURRENT_COMPONENT_TEXT](state, payload) {
        debugger
        state.currentComponent = payload.component;
    },
    [FETCH_CURRENT_COMPONENT_DATA](state, payload) {
        debugger;
        state.currentData = payload.data.data.user.issueComments;
        state.loading = false;
    }
}

const actions = {
    getCurrentComponentData({ commit }, payload) {
        //fetch data for the component if required
        debugger;
        switch(payload.name) {
            case 'tabs/Timeline': 
                fetchObj.fetchIssueComments( { apolloClient: payload.apolloClient, commit: commit } );

        }
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
<template>
    <div>
        <repo-detail></repo-detail>
        <loading-component v-if="$apollo.loading"></loading-component>
        <div v-else class="row profile-view">
            <profile :user="user" :repoCount="totalRepos"></profile>  
            <div class="row repo-content" v-if="getReposLength">
                <div  v-for="(repo, index) in repos" 
                        :key="repo.cursor" >
                <list-transition>
                    <repo-item                               
                        :repo="repo" 
                        :data-index="index"
                        :key="repo.node.name"
                    ></repo-item>
                </list-transition>
                </div>
                <div class="pagination" v-if="getReposLength">
                    <span @click="loadPaginationRepos('prev', username, preCursor)"><i class="fa fa-arrow-left" title="previous"></i></span>
                    <span @click="loadPaginationRepos('next', username, nextCursor)"><i class="fa fa-arrow-right" title="next"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { searchUserDetails, fetchRepoDetails, fetchPreviousRepoDetails, fetchNextRepoDetails } from '../graphql/quaries/user'
import { lazyLoadComponent } from '@/utils/dynamicLoading'
import RepoDetail from '@/views/RepoDetail'
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            user: {},
            repos: [],
            username: 'AmitMundra54',
            nextCursor: '',
            preCursor: '',
            initialCursor: '',
            totalRepos: 0,
        }
    },
    computed: {
        getReposLength() {
            return { length } = this.repos;
        }
    },
    components: {
    Profile: () => lazyLoadComponent('Profile'),
    ListTransition: () => lazyLoadComponent('ListTransition'),
    RepoItem: () => lazyLoadComponent('RepoItem'),
    RepoDetail
    },
    watch: {
        '$route': {
           handler: 'fetchData',
           immediate: true
        },
        'repos': 'setCursor'
    },
    methods: {
        ...mapMutations(['SET_TOTAL_REPO_COUNT']),
        fetchData() {
            debugger;
            this.repos = [];
            const { username } = this.$route.params;
            this.username = username;
            this.loaduser(username);
            this.loadrepos(username);
        },
        setCursor() {
            const { length } = this.repos;
            if (this.repos && length) {
                this.preCursor = this.repos[0].cursor
                this.nextCursor = this.repos[length -1].cursor;
            }
        },
        loadrepos(username, type) {
            debugger
            this.$apollo.query({
                query: fetchRepoDetails,
                variables: {
                username: username,
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                this.assignReposData(data);
                this.setInitialCursor();
            })
        },
        setInitialCursor() {
            const { length } = this.repos;
            this.initialCursor = this.repos[length-1].cursor;
        },
        assignReposData(data) {
            if (data.search.nodes[0].repositories.edges.length > 0) {
                this.SET_TOTAL_REPO_COUNT(data.search.nodes[0].repositories.totalCount);
                this.repos = data.search.nodes[0].repositories.edges;
            }
        },
        loadPreviousRepos(username, preCursor) {
            this.$apollo.query({
                query: fetchPreviousRepoDetails,
                variables: {
                username: username,
                before: preCursor
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                this.assignReposData(data);
            })
        },
        loadNextRepos(username, nextCursor) {
            this.$apollo.query({
                query: fetchNextRepoDetails,
                variables: {
                username: username,
                after: nextCursor
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                debugger
                this.assignReposData(data);
            })
        },
        loadPaginationRepos(type, username, cursor) {
            debugger;
            switch(type) {
                case 'prev': 
                    this.loadPreviousRepos(username, cursor);
                    break;
                case 'next':
                    this.loadNextRepos(username, cursor);
            }
        },
        loaduser(username) {
            this.$apollo.query({
                query: searchUserDetails,
                variables: {
                login: username
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                this.user = data.user;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.profile-view {
    grid-template-columns: auto;
    grid-template-rows: 340px auto;
    color: white;
    @media(max-width: 768px) {
        grid-template-rows: 340px auto;
    }
    .repo-content {
        grid-template-columns: 100%;
        color: black;   
        margin-bottom: 50px;
    }
    .pagination {
        font-size: 30px;
        color: var(--c-blue);
        text-align: center;
        span {
            padding: 20px;
        }
    }
}
</style>


<template>
    <div class="row profile-view" v-if="!$apollo.loading">
        <profile :user="user"></profile>  
        <div class="row repo-content">
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
            <div class="pagination" v-if="!$apollo.loading">
                <span @click="loadPaginationRepos('prev', username, preCursor)"><i class="fa fa-arrow-left" title="previous"></i></span>
                <span @click="loadPaginationRepos('next', username, nextCursor)"><i class="fa fa-arrow-right" title="next"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
import { searchUserDetails, fetchRepoDetails, fetchPreviousRepoDetails, fetchNextRepoDetails} from '../graphql/quaries/user'
import Profile from '@/components/Profile'
import ListTransition from '@/components/ListTransition'
import RepoItem from '@/components/RepoItem'

export default {
    data() {
        return {
            user: [],
            repos: [],
            username: 'AmitMundra54',
            nextCursor: '',
            preCursor: '',
            initialCursor: ''
        }
    },

    created() {
        this.username = this.$route.params.username === 'AmitMundra54' ? 'yyx990803' : 'AmitMundra54'  
        this.$router.push({
            name: 'USER_DETAIL',
            params: {
                username: this.username
            }
        });
    },
    components: {
        Profile,
        ListTransition,
        RepoItem     
    },
    watch: {
        '$route': 'fetchData',
        'repos': 'setCursor'
    },
    methods: {
        fetchData() {
            const { username } = this.$route.params;
            this.username = username;
            this.loaduser(username);
            this.loadrepos(username);
        },
        setCursor() {
            const { length } = this.repos;
            if (this.repos) {
                this.preCursor = this.repos[0].cursor
                this.nextCursor = this.repos[length -1].cursor;
            }
        },
        loadrepos(username, type) {
            this.$apollo.query({
                query: fetchRepoDetails,
                variables: {
                username: username,
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                this.repos = data.search.nodes[0].repositories.edges;
                this.setInitialCursor();
            })
        },
        setInitialCursor() {
            const { length } = this.repos;
            this.initialCursor = this.repos[length-1].cursor;
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
                this.repos = data.search.nodes[0].repositories.edges;
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
                this.repos = data.search.nodes[0].repositories.edges;
            })
        },
        loadPaginationRepos(type, username, cursor) {
            if (type === 'prev') {
                this.loadPreviousRepos(username, cursor)
            } 
            if (type === 'next') {
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


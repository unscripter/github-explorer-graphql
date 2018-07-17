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
        this.loaduser(this.username);
        this.loadrepos(this.username);
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
            debugger;
            const { username } = this.$route.params;
            this.username = username;
            this.loaduser(username);
            this.loadrepos(username);
        },
        setCursor() {
            debugger
            const { length } = this.repos;
            if (this.repos) {
                debugger
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
                debugger;
                this.repos = data.search.nodes[0].repositories.edges;
                this.setInitialCursor();
                console.log("Repo Data", this.repos);
            })
        },
        setInitialCursor() {
            const { length } = this.repos;
            this.initialCursor = this.repos[length-1].cursor;
        },
        loadPreviousRepos(username, preCursor) {
            console.log("cursor", username, preCursor)
        // if (cursor !== this.initialCursor){
            this.$apollo.query({
                query: fetchPreviousRepoDetails,
                variables: {
                username: username,
                before: preCursor
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                debugger;
                this.repos = data.search.nodes[0].repositories.edges;
                console.log("Pre Data", this.repos);
            })
        },
        loadNextRepos(username, nextCursor) {
            console.log("cursor", username, nextCursor)
            this.$apollo.query({
                query: fetchNextRepoDetails,
                variables: {
                username: username,
                after: nextCursor
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                debugger;
                this.repos = data.search.nodes[0].repositories.edges;
                console.log("Next Data", this.repos);
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
            debugger
            this.$apollo.query({
                query: searchUserDetails,
                variables: {
                login: username
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                debugger;
                console.log("New Data", data);
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


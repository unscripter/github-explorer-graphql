<template>
    <section class="sidebar row" :class="{ visible: visible }">
        <div class="row sidenav-content">
            <!-- <div class="side-toolbar">
                <a @click="SHOW_HIDE_NAVIGATION"><i class="fa fa-bars bar-adjust"></i></a>
                <span>Github Explorer</span>
            </div> -->
            <div class="side-search">
                <search-input placeholder="enter keyword" v-model="searchText"></search-input>
            </div>
            <div class="side-content">
                <div id="loading" v-if="$apollo.loading">
                    <div class="loading"></div>
                </div>
                <div v-if="!$apollo.loading">
                    <div>
                        <search-list :searchResult="search.edges"></search-list>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import SearchInput from '@/components/SearchInput.vue';
import { searchAnonymousUser } from '../graphql/quaries/user';
import SearchList from '@/components/SearchResultList'

export default {
    data() {
        return {
            searchText: 'AmitMundra54',
            loading: 0,
            search: []
        }
    },
    created() {
        this.fetchUserDetails();
    },
     components: {
       SearchInput,
       SearchList
    },
    computed: {
        ...mapGetters(['visible']),
    },
     methods: {
        ...mapMutations(['SHOW_HIDE_NAVIGATION']),
        fetchUserDetails() {
            debugger;
            this.$apollo.query({
                query: searchAnonymousUser,
                variables: {
                query: this.searchText
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                debugger;
                console.log("DATA", data);
                this.search = data.search;
                // this.fetchedUsers = data.user;
            })
    }
    },
    apollo: {
    search: {
        $loadingKey: 'loading',
        query: searchAnonymousUser,
        variables() {
            return {
            query: this.searchText
            }
        },
        fetchPolicy: 'cache-first'
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebar {
    background-color: var(--c-blue-dark);
    // grid-template-columns:200px;
    grid-gap: 0;
    color: white;
    width: 280px;
    margin-left: -280px;
    position: fixed;
    height: 690px;
    z-index: 20;
    top: 50px;
    transition:margin .4s ease;
    // @media (max-width: 768px) {
    //     width: 412px;
    //     margin-left: -412px;
    // }
    .sidenav-content {
        grid-template-rows: 50px 20px auto;
        width: 280px;
        margin-top: 5px;
        // @media (max-width: 768px) {
        //     width: 360px;
        // }
        .side-toolbar {
            background-color: var(--c-blue);
            padding: 15px;
            .bar-adjust {
            font-size: 1.5rem;
            line-height: 20px;
            }
            span {
                font-size: 20px;
                margin-left: 5px;
            }
        }
        .side-content {
            color: white;
            width: 250px;
        }
        .loading {
        border-radius: 50%;
        width: 24px;
        height: 24px;
        border: .25rem solid rgba(255,255,255,0.2);
        border-top-color: white;
        animation: spin 1s infinite linear;
        margin: 15px auto;
    }
    }   
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.visible {
    margin: 0
}
</style>




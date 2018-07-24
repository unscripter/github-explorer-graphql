<template>
    <section class="sidebar row" :class="{ visible: visible }">
        <div class="row sidenav-content">
            <!-- <div class="side-toolbar">
                <a @click="SHOW_HIDE_NAVIGATION"><i class="fa fa-bars bar-adjust"></i></a>
                <span>Github Explorer</span>
            </div> -->
            <div class="side-search">
                <search-input aria-label="Search" type="search" placeholder="enter keyword" v-model="searchText" :value="searchText" ></search-input>
            </div>
            <div class="side-content">
                <loading-component v-if="$apollo.loading"></loading-component>
                <div v-else>
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
import SearchList from '@/components/SearchResultList';
import LoadingComponent from '@/components/Loading'


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
       SearchList,
       LoadingComponent
    },
    computed: {
        ...mapGetters(['visible']),
    },
     methods: {
        ...mapMutations(['SHOW_HIDE_NAVIGATION']),
        fetchUserDetails() {
            this.$apollo.query({
                query: searchAnonymousUser,
                variables: {
                query: this.searchText
                },
                fetchPolicy: 'cache-first'
            }).then(({data}) => {
                this.search = data.search;
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
    grid-gap: 0;
    color: white;
    width: 280px;
    margin-left: -280px;
    position: fixed;
    height: 700px;
    opacity: .95;
    top: 50px;
    transition:margin .4s ease;
    z-index: 1;
    .sidenav-content {
        grid-template-rows: 50px 20px auto;
        width: 280px;
        margin-top: 5px;
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
    }   
}

.visible {
    margin: 0
}
</style>




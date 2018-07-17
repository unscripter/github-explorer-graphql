<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    <input type="text" v-model="name" @keyup.enter="fetchUserDetails" placeholder="enter your name">
    <input type="text" name="search" id="search" v-model="searchValue" placeholder="Enter user name">
      <h1 v-if="$apollo.loadingKey">Loading...</h1>
      <h1 v-if="$apollo.error">Error...</h1>
    <div v-else>{{user}}</div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { searchUserDetails, searchAnonymousUser} from '../graphql/quaries/user'
import { fetchViewerDetails } from '../graphql/quaries/viewer' 

export default {
  name: 'HelloWorld',

  data() {
    return {
      user: [],
      name: 'AmitMundra54',
      viewer: '',
      searchValue: "amit",
      repoCount: 5,
      search: [],
      loading: 0
    }
  },
  created() {
    this.fetchUserDetail();
  },
  methods: {
    fetchUserDetail() {
      debugger;
      this.$apollo.query({
        query: searchUserDetails,
        variables: {
        login: this.name
        },
        fetchPolicy: 'cache-first'
      }).then(({data}) => {
        debugger;
        console.log("DATA", data);
        this.user = data.user;
      })
    }
  },
  props: {
    msg: String
  },
  apollo: {
    // $skipAll: true,
    // user: {
    //   query: searchUserDetails,
    //   variables() {
    //     return {
    //     login: this.name
    //     }
    //   },
    //   meta: "__User",
    // },
    viewer: {
      query: fetchViewerDetails,
      variables() {
        return {
        number_of_repos: this.repoCount
        }
      }
    },
    search: {
      query: searchAnonymousUser,
      variables() {
        return {
          query: this.searchValue
        }
      },
      updated() {
        console.log(this.$apollo.store)
      },
      // pollInterval: 300
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

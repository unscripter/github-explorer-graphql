import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { token } from '../env/env'
 
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${token}`,
  },
})

// const authMiddleware = new ApolloLink((operation, forward) => {
//     // add the authorization to the headers
//     operation.setContext({
//       headers: {
//         authorization: token,
//       } 
//     });
  
//     return forward(operation);
//   })
  
 
// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  cachePolicy: { query: true, data: true },  
})
 
// Install the vue plugin
Vue.use(VueApollo)
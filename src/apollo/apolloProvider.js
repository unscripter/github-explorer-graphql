import { apolloClient } from './apolloClientConfig';
import VueApollo from 'vue-apollo'

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $query: {
        $loadingKey: 'loading',
        // fetchPolicy: 'cache-and-network',
        // errorPolicy: 'all',
        // watchQuery: {
        //     fetchPolicy: 'cache-and-network',
        //     errorPolicy: 'ignore',
        //   },
        // mutate: {
        // fetchPolicy: 'cache-and-network',
        // errorPolicy: 'all'
        // }  
        },
        $deep: true             
      }
  })
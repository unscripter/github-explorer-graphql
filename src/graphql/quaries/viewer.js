import gql from 'graphql-tag'

export const fetchViewerDetails = gql`query($number_of_repos:Int!) {
        viewer {
          name
          bio
           repositories(last: $number_of_repos) {
         nodes {
           name
         }
       }
        avatarUrl
        bioHTML
        commitComments {
        totalCount
        },
    }
}`
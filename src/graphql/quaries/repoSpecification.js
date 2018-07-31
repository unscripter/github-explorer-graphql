import gql from 'graphql-tag'

export const repoIssueComments = 
    gql`query User($login: String!, $last: Number) {
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
}` 
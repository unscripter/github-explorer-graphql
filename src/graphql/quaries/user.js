import gql from 'graphql-tag'

export const searchUserDetails = 
    gql`query User($login: String!){
      user(login: $login) {
        name
        login
        bio 
        avatarUrl
        bioHTML
      followers{
        totalCount
      }
      following{
        totalCount
      }
      }
    } `

export const fetchRepoDetails = 
gql`query Search($username: String!) {
  search(first:1, query:$username, type:USER){
    nodes {
      ... on User {
        repositories(first: 5){
          totalCount
            edges {
              cursor
              node {
                name
                description
                watchers {
                  totalCount
                }
                forks {
                  totalCount
                }
                stargazers {
                  totalCount
                }
                languages(last: 3) {
                  edges {
                    node {
                      name
                    }
                  }
                }
                updatedAt
              }
            }
          }
      }
    }
  }
}`

export const fetchPreviousRepoDetails = 
gql`query Search($username: String! $before: String!) {
  search(first: 5 query: $username type: USER){
    nodes {
      ... on User {
        repositories(last: 5, before: $before){
          edges {
            cursor
          node {
              name
              description
              watchers {
                totalCount
              }
              forks {
                totalCount
              }
              stargazers {
                totalCount
              }
              languages(last: 3) {
                edges {
                  node {
                    name
                  }
                }
              }
              updatedAt
              }
          }
        }
      }
    }
  }
}`

  export const fetchNextRepoDetails = 
  gql`query Search($username: String! $after: String!) {
    search(first: 1 query: $username type: USER){
      nodes {
        ... on User {
          repositories(first: 5 after: $after){
            edges {
              cursor
            node {
                name
                description
                watchers {
                  totalCount
                }
                forks {
                  totalCount
                }
                stargazers {
                  totalCount
                }
                languages(last: 3) {
                  edges {
                    node {
                      name
                    }
                  }
                }
                updatedAt
                }
            }
          }
        }
      }
    }
  }`
  
    export const searchAnonymousUser = 
    gql`query search($query: String!){
      search(first: 15, query: $query, type: USER) {
        edges {
          node {
            ... on User {
              login
              avatarUrl
              name
            }
          }
        }
      }
    }`


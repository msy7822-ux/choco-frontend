import { gql } from "@apollo/client";

export const MERCHANDISES = gql`
  query fetchMerchandise($endCursor: String) {
    merchandises(first: 10, after: $endCursor) {
      pageInfo {
        endCursor,
        hasNextPage
      },
      edges {
        node {
          id,
          title,
          price,
          merchandiseImages {
            id,
            url
          }
        }
      }
    }
  }
`;

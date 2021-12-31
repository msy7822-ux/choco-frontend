import { gql } from "@apollo/client";

export const FAVORITE_QUERY = gql`
  query fetchCurrentUserFavorite($merchandiseId: Int!) {
    favorite(merchandiseId: $merchandiseId) {
      id,
    }
  }
`;

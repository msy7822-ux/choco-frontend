import { gql } from "@apollo/client";

export const FAVORITE_MUTATION = gql`
  mutation favoriteMutation($merchandiseId: Int!, $isFavorite: Boolean!) {
    favorite(input: {
      merchandiseId: $merchandiseId,
      isFavorited: $isFavorite,
    }) {
      favorite {
        id
      }
    }
  }
`;

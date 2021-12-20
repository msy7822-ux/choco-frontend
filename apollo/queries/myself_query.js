import { gql } from "@apollo/client";

export const MYSELF = gql`
  query {
    myself {
      id,
      name,
      image,
      evaluation,
      listedMerchandises {
        id,
        title,
        price,
        image
      }
    }
  }
`;

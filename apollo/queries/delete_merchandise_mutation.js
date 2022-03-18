import { gql } from "@apollo/client";

export const DELETE_MERCHANDISE = gql`
  mutation deleteMerchandiseMutation($merchandiseId: Int!) {
    deleteMerchandise(input: {
      merchandiseId: $merchandiseId
    }) {
      result
    }
  }
`;

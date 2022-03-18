import { gql } from "@apollo/client";

export const MERCHANDISE_DETAIL = gql`
  query fetchMerchandiseDetails($id: Int!) {
    merchandiseDetail(id: $id) {
      id,
      title,
      description,
      price,
      condition,
      seller {
        id,
        email
      },
      dividedDepartment {
        department {
          id,
          name
        }
      },
      merchandiseImages {
        id,
        url,
      }
    }
  }
`;

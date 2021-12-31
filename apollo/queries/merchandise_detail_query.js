import { gql } from "@apollo/client";

export const MERCHANDISE_DETAIL = gql`
  query fetchMerchandiseDetails($id: Int!) {
    merchandiseDetail(id: $id) {
      id,
      title,
      description,
      price,
      seller {
        id,
        email
      },
      dividedDepartment {
        department {
          name
        }
      }
      merchandiseImages {
        id,
        url,
      }
    }
  }
`;

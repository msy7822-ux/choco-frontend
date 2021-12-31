import { gql } from "@apollo/client";

export const CREATE_MERCHANDISE = gql`
  mutation($title: String!, $description: String!, $price: Int!, $publicStatus: Int!, $condition: Int!, $department_id: Int!, $image: [String!]) {
    createMerchandise(
      input: {
        title: $title,
        description: $description,
        price: $price,
        publicStatus: $publicStatus,
        condition: $condition,
        departmentId: $department_id,
        image: $image,
    }) {
      merchandise {
        id
      }
    }
  }
`;

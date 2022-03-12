import { gql } from "@apollo/client";

export const EDIT_MERCHANDISE = gql`
  mutation editMerchandiseMutation($merchandiseId: Int!, $title: String!, $description: String!, $price: Int!, $publicStatus: Int!, $condition: Int!, departmentId: Int!, $image: String[]!
    ) {
    editListingMerchandise (input: {
      merchandiseId: $merchandiseId,
      title: $title,
      description: $description,
      price: $price,
      publicStatus: $publicStatus,
      condition: $condition,
      departmentId: $departmentId,
      image: $image
    })
  }
`;

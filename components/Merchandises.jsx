/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

export const Merchandises = ({ merchandise }) => {
  console.log(merchandise.image);
  return (
    <>
      <img
        src={merchandise.image}
        alt={merchandise.title}
        loading="lazy"
      />
      <Box>{merchandise.title}</Box>
      <Box>{merchandise.price}円</Box>
    </>
  );
};

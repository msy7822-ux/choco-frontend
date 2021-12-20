/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          pt: '1rem',
          pb: '0.5rem',
        }}
      >
        <Box sx={{ mt: 0.5 }}>
          <img
            src="/danball_icon.svg"
            alt="choco icon"
            style={{ height: 50 }}
          />
        </Box>
        <Box
          sx={{
            fontSize: '3rem',
            fontFamily: 'Quando',
            color: '#848484',
            ml: 1,
          }}
        >
          Choco
        </Box>
      </Box>
      <hr color="#EBEBEB" style={{ width: '70%' }} />
    </>
  );
};

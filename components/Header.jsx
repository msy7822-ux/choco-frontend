/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <Box
        onClick={() => {
          router.push('/');
        }}
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

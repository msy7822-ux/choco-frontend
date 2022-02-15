/* eslint-disable @next/next/no-img-element */
import { signIn } from 'next-auth/react';
import { Box, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { AppIconComponent } from '../components/molecules/AppIconComponent';
import HtmlHeadComponent from '../components/atoms/HtmlHeadComponent';

export const iconStyle = {
  height: '50px',
  marginTop: '11px',
}

export const titleStyle = {
  fontSize: '3rem',
  color: '#848484',
  marginLeft: '7px',
};

const Login = () => {
  return (
      <>
        <HtmlHeadComponent />
        <Box sx={{mt: '10rem', textAlign: 'center'}}>
          <Box
            sx={{
              fontSize: '1.2rem',
              color: '#848484',
              textAlign: 'center'
            }}
          >
            学生のためのフリマサイト
          </Box>
          <AppIconComponent
            titleClasses='text-[3rem] text-[#848484] font-serif'
            iconClasses='h-[50px] mt-[11px] mr-[10px]'
          />
          <Box
            sx={{
              fontSize: '1.1rem',
              color: '#848484',
              mt: '2rem'
            }}
          >
            さっそく使ってみる
          </Box>
          <Button
            sx={{
              mt: '2rem',
              border: '1px solid #9F9F9F',
              color: '#5B5959',
              bgColor: '#FFF',
              textTransform: 'none',
              fontSize: '1rem',
              py: 0,
            }}
            onClick={() => signIn()}
          >
            <Box sx={{ mr: 1, mt: 1, fontSize: '2rem' }}>
              <FcGoogle />
            </Box>
            Googleでログインする
          </Button>
        </Box>
      </>
  );
}

export default Login;
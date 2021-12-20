/* eslint-disable @next/next/no-img-element */
import { signIn } from 'next-auth/react';
import { Box, Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import HeadComponent from '../components/HeadComponent';

const Login = () => {
  return (
      <>
        <HeadComponent />
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
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '3rem'
          }}>
            <Box sx={{mt: 1, mr: 1}}>
              <img
                style={{ height: 60 }}
                src="/danball_icon.svg"
                alt="アイコン"
              />
            </Box>
            <Box
              sx={{
                fontSize: '4rem',
                fontFamily: 'Quando',
                color: '#848484'
              }}
            >
              Choco
          </Box>
          </Box>
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
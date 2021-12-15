import { signIn } from 'next-auth/react';
import { Layout } from '../components/Layout';
import { Button, Box, Text, Image, Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { GrStatusWarning } from 'react-icons/gr';
import { useMediaQuery } from "react-responsive";

const Login = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 560px)'});

  return (
    <>
      {isMobileScreen &&
        <Layout>
          <Box mt="10rem" textAlign="center">
            <Text
              fontSize="1.5rem"
              mb="1rem"
              color="#9F9F9F"
              textAlign="center"
            >
              学生のためのフリマサイト
            </Text>
            <Center w="100%" textAlign="center">
              <Image
                pr="1"
                color="#6c6c6c"
                h="5rem"
                src="/danball_icon.svg"
                alt="アイコン"
              />
              <Text
                fontSize="5rem"
                color="#848484"
                fontFamily="Quando"
              >
                Choco
              </Text>
            </Center>
            <Text
              fontSize="1.1rem"
              color="#848484"
              mt="2rem"
            >
              さっそく使ってみる
            </Text>
            <Button
              mt="3rem"
              leftIcon={<FcGoogle />}
              color="#5B5959"
              border="1px solid #9F9F9F"
              bg="#FFF"
              onClick={() => signIn()}
            >
              Googleでログインする
            </Button>
          </Box>
        </Layout>
      }

      {!isMobileScreen &&
        <Box
          w="100%"
          textAlign="center"
          mt="15rem"
        >
          <Image
            src="/warning.svg"
            alt='warning'
            h="32"
            w="32"
            mx="auto"
            mb="3rem"
          />
          <Text fontWeight="bold" fontSize="2rem">
            ※本サービスは、現時点でタブレットおよびデスクトップに対応しておりません。<br /> お持ちのスマートフォンでご利用ください。
          </Text>
        </Box>
      }
    </>
  );
}

export default Login;